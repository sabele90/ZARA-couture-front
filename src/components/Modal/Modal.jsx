import React from "react";
import "./Modal.css";
import { Link } from "react-router-dom";
const Modal = ({ onClose }) => {
  return (
    <div className="window-modal">
      <p onClick={onClose} className="close-button">
        &#10006;
      </p>

      <div className="header-container-text-modal">
        <div>
          <h1 className="header-text-z-modal">Z</h1>
        </div>
        <div>
          <h1 className="header-text-a-modal">A</h1>
        </div>
        <div>
          <h1 className="header-text-r-modal">R</h1>
        </div>
        <div>
          <h1 className="header-text-a-a-modal">A</h1>
        </div>
      </div>
      <hr className="custom-line" />
      <div className="zara-options-modal">
        <p>WOMAN</p>
        <p>MAN</p>
        <p>KIDS</p>
        <p>BEAUTY</p>
        <p>ZARA PRE-OWNED</p>
      </div>
      <div className="zara-buttons-modal">
        <p className="button-row">
          <Link className="link-style" to="/couture">
            <button onClick={onClose} className="button-option">
              ZARA COUTURE
            </button>
          </Link>

          <button className="button-option"> NEW</button>
        </p>
        <p className="button-row">
          <button className="button-option"> COATS</button>
          <button className="button-option"> PUFFERS</button>
          <button className="button-option"> JACKETS</button>
          <button className="button-option"> BLAZERS</button>
        </p>
        <p className="button-row">
          <button className="button-option"> DRESSES|JUMPSIUTS</button>
          <button className="button-option"> WAISCOATS|GILETS</button>
        </p>
        <p className="button-row">
          <button className="button-option"> TOPS|BODYSUITS</button>
          <button className="button-option"> SHIRTS</button>
          <button className="button-option"> T-SHIRTS</button>
        </p>
        <p className="button-row">
          <button className="button-option"> SKI COLLECTION</button>
          <button className="button-option"> PARTY</button>
          <button className="button-option"> SPECIAL EDITION</button>
        </p>
      </div>
    </div>
  );
};

export default Modal;
