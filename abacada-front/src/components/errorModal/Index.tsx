import React from "react";
import "./style.css";
import { errorModalProps } from "../../@types/types";

export default function ErrorModal(props: errorModalProps) {
    return (
        <div className="errorModalBackground">
          <div className="errorModalContent">
            <div className="errorModalTitle">
              <h2>{props.title}</h2>
            </div>
            <div className="errorModalMessage">
              <p>{props.message}</p>
            </div>
            <div className="errorModalButtons">
              <button className="errorModalButtonConfirm" onClick={props.onOK}>OK</button>
            </div>
          </div>
        </div>
      );
}