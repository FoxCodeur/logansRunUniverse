import React, { useState, useMemo, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom"; // Importation du hook useNavigate
import "./LexiqueSearchBar.scss";
import data from "../../../data.json"; // Importation des données JSON

const LexiqueSearchBar = () => {
  const [value, setValue] = useState("");
  const [isActive, setIsActive] = useState(false);
  const inputRef = useRef(null);
  const navigate = useNavigate(); // Initialisation de useNavigate

  const titles = useMemo(
    () =>
      Object.values(data).flatMap((category) =>
        Object.values(category).map((item) => item.titre)
      ),
    []
  );

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleClick = () => {
    setIsActive(true);
  };

  const handleClickOutside = (event) => {
    if (inputRef.current && !inputRef.current.contains(event.target)) {
      setIsActive(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredTitles = titles.filter((title) =>
    title.toLowerCase().includes(value.toLowerCase())
  );

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
