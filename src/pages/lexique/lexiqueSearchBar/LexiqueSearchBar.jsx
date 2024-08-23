import React, { useState, useMemo, useRef } from "react";
//Pour afficher l'icône de loupe (faMagnifyingGlass) dans la barre de recherche.
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
//permet de rediriger l'utilisateur vers une autre page de manière programmatique.
import { useNavigate } from "react-router-dom";
import "./LexiqueSearchBar.scss";
import data from "../../../data.json"; // Importation des données JSON

const LexiqueSearchBar = () => {
  // value gère la valeur de ce qui est tapté dans la barre de recherche.
  //setValue est la fonction utilisée pour mettre à jour cette valeur.
  const [value, setValue] = useState("");
  //Détermine si la liste de suggestions doit être affichée. setIsActive
  // permet de contrôler son état.
  const [isActive, setIsActive] = useState(false);
  //Utilise useRef pour créer une référence au champ de saisie. Cela permet
  // d'interagir directement avec l'élément DOM (comme détecter les clics
  //en dehors du champ).
  const inputRef = useRef(null);
  const navigate = useNavigate(); // Le hook useNavigate de
  // react-router-dom permet de rediriger l'utilisateur vers une autre page.
  //useMemo optimise les performances en ne recalculant la liste des titres
  // que lorsque data change. Il s'agit d'une liste plate de tous les titres provenant du fichier JSON.
  const titles = useMemo(
    () =>
      Object.values(data).flatMap((lexiqueTitre) =>
        Object.values(lexiqueTitre).map((item) => item.titre)
      ),
    []
  );
  //Gestion des changements et des clics
  //handleChange met à jour la valeur du champ de recherche lorsque l'utilisateur
  // tape dedans.
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  //handleClick active l'affichage de la liste de suggestions.
  const handleClick = () => {
    setIsActive(true);
  };
  //handleClickOutside : Si l'utilisateur clique en dehors de la barre de
  // recherche, cela désactive l'affichage des suggestions
  const handleClickOutside = (event) => {
    if (inputRef.current && !inputRef.current.contains(event.target)) {
      setIsActive(false);
    }
  };
  //Gestion des effets (utilisation de useEffect)
  //useEffect est utilisé pour ajouter et retirer l'écouteur d'événements qui
  // détecte les clics en dehors de la barre de recherche. Cet effet ne
  // s'exécute qu'une seule fois (grâce à [] en second argument).
  React.useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  //filteredTitles contient uniquement les titres qui correspondent à ce
  // que l'utilisateur a tapé, en ignorant la casse (toLowerCase).
  const filteredTitles = titles.filter((title) =>
    title.toLowerCase().includes(value.toLowerCase())
  );
  //handleSelectTitle : Lorsque l'utilisateur clique sur un titre dans la
  // liste de suggestions, ce titre est mis dans la barre de recherche, et
  // la liste de suggestions disparaît.
  const handleSelectTitle = (title) => {
    setValue(title);
    setIsActive(false);
  };

  // Fonction de gestion du clic sur le bouton de recherche
  const handleSearch = () => {
    if (value) {
      // Conversion du titre en URL compatible
      const formattedTitle = value.toLowerCase().replace(/ /g, "-");
      navigate(`/${formattedTitle}`); // Redirection vers la page correspondante
    }
  };

  return (
    <div className="marginUpDownContainer">
      <div className="searchbarContainer box_center_with_Margin">
        <div className="inputSearch" ref={inputRef}>
          <input
            type="text"
            placeholder="Type to Search"
            value={value}
            onChange={handleChange}
            onClick={handleClick}
          />
          <button onClick={handleSearch}>
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
                  onClick={() => handleSelectTitle(title)}
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
