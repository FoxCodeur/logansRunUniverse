import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./LexiqueSearchBar.scss";

const LexiqueSearchBar = () => {
  return (
    <div className="marginUpDownContainer">
      <div className="searchbarContainer box_center_with_Margin">
        <div className="inputSearch">
          <input type="text" placeholder="type to Search" />
          <div className="inputSearchIcon_Container">
            <FontAwesomeIcon
              className="inputSearchIcon"
              icon={faMagnifyingGlass}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LexiqueSearchBar;
