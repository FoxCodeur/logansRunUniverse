import React, { useState, useMemo, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./LexiqueSearchBar.scss";

const LexiqueSearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [data, setData] = useState(null);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  // Récupération des données depuis le fichier JSON
  const fetchData = async () => {
    try {
      const response = await axios.get("/data.json");
      setData(response.data);
    } catch (error) {
      console.error("Erreur lors du chargement du fichier JSON", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Utilisation de useMemo pour optimiser le calcul des titres
  const titles = useMemo(() => {
    if (!data) return [];
    return Object.values(data)
      .flatMap((lexiqueTitre) =>
        Object.values(lexiqueTitre).map((item) => item.titre)
      )
      .filter((title) => typeof title === "string");
  }, [data]);

  // Filtrage des titres en fonction du terme de recherche
  const filteredTitles = useMemo(() => {
    return titles.filter((title) =>
      title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, titles]);

  // Fonction de gestion du changement dans le champ de recherche
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Gestion du clic sur l'input pour activer les suggestions
  const handleInputClick = () => {
    setIsActive(true);
  };

  // Fonction de gestion du clic à l'extérieur pour fermer la liste
  const handleClickOutside = (event) => {
    if (inputRef.current && !inputRef.current.contains(event.target)) {
      setIsActive(false);
    }
  };

  // Ajout de l'événement pour détecter les clics à l'extérieur
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Sélection d'un titre dans la liste et fermeture de la liste
  const handleTitleSelect = (title) => {
    setSearchTerm(title);
    setIsActive(false);
  };

  // Gestion de la soumission de la recherche (redirection)
  const handleSearchSubmit = () => {
    if (searchTerm) {
      const formattedTitle = searchTerm.toLowerCase().replace(/ /g, "-");
      navigate(`/${formattedTitle}`);
    }
  };

  return (
    <div className="marginUpDownContainer">
      <div className="searchbarContainer box_center_with_Margin">
        <div className="inputSearch" ref={inputRef}>
          <input
            type="text"
            placeholder="Type to Search"
            value={searchTerm}
            onChange={handleInputChange}
            onClick={handleInputClick}
          />
          <button onClick={handleSearchSubmit}>
            <span className="inputSearchIcon_Container">
              <FontAwesomeIcon
                className="inputSearchIcon"
                icon={faMagnifyingGlass}
              />
            </span>
          </button>
          {isActive && filteredTitles.length > 0 && (
            <ul className="suggestionsList">
              {filteredTitles.map((title, index) => (
                <li
                  key={index}
                  className="suggestionItem"
                  onClick={() => handleTitleSelect(title)}
                >
                  {title}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default LexiqueSearchBar;
