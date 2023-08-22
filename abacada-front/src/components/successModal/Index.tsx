import React from "react";
import "./style.css";
import { successModalProps } from "../../@types/types";

export default function SuccessModal(props: successModalProps) {
    return (
        <div className="successModalBackground">
          <div className="successModalContent">
            <div className="successModalTitle">
              <h2>{props.title}</h2>
            </div>
            <div className="successModalMessage">
              <p>{props.message}</p>
            </div>
            <div className="successModalButtons">
              <button className="successModalButtonConfirm" onClick={props.onOK}>OK</button>
            </div>
          </div>
        </div>
      );
}