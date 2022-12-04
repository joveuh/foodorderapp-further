import React from "react";
// ReactDOM.createPortal exists in the ReactDOM library 

// MAKE SURE TO IMPORT REACTDOM from "react-dom" and not "react"
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div> {props.children} </div>
    </div>
  );
};

const PortalElement = document.getElementById('overlay');

const Modal = (props) => {
  return <div>
    {/* createPortal needs to know not only what to Portal but also WHERE TO Portal ! */}
    {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>, PortalElement)}
    {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, PortalElement)}
  </div>;
};

export default Modal;
