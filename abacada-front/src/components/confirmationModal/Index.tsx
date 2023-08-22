import React from "react";
import "./style.css";
import { confirmationModalProps } from "../../@types/types";

export default function ConfirmationModal(props: confirmationModalProps) {
    return (
        <div className="confirmationModalBackground">
          <div className="confirmationModalContent">
            <div className="confirmationModalTitle">
              <h2>{props.title}</h2>
            </div>
            <div className="confirmationModalMessage">
              <p>{props.message}</p>
            </div>
            <div className="confirmationModalButtons">
              <button className="confirmationModalButtonConfirm" onClick={props.onConfirm}>CONFIRMAR</button>
              <button className="confirmationModalButtonCancel" onClick={props.onCancel}>CANCELAR</button>
            </div>
          </div>
        </div>
      );
}