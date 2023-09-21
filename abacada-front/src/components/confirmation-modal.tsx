import React from "react";
import "../styles/components/confirmation-modal.css";
import { confirmationModalProps } from "../@types/types";

export default function ConfirmationModal(props: confirmationModalProps) {
    return (
        <div className="background-confirmation-modal">
          <div className="content-confirmation-modal">
            <div className="title-confirmation-modal">
              <h2>{props.title}</h2>
            </div>
            <div className="message-confirmation-modal">
              <p>{props.message}</p>
            </div>
            <div className="buttons-confirmation-modal">
              <button className="button-confirm-confirmation-modal" onClick={props.onConfirm}>CONFIRMAR</button>
              <button className="button-cancel-confirmation-modal" onClick={props.onCancel}>CANCELAR</button>
            </div>
          </div>
        </div>
      );
}