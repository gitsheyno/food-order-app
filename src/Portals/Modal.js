/** @format */

import React from "react";
import ReactDOM from "react-dom";
import classes from "../Portals/Modal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} />;
};

const ModalOverLay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const createdProtal = document.getElementById("portal");
const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, createdProtal)}
      {ReactDOM.createPortal(
        <ModalOverLay>{props.children}</ModalOverLay>,
        createdProtal
      )}
    </>
  );
};

export default Modal;
