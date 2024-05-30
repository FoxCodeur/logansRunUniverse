import React from "react";
import "./UpButton.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
const UpButton = () => {
  return (
    <div className="btn_basis">
      <FontAwesomeIcon icon={faArrowUp} className="faArrowUp" />
    </div>
  );
};

export default UpButton;
