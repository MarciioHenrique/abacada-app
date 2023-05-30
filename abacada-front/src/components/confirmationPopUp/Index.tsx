import React from "react";
import "./style.css";

export default function ConfirmationPopUp(props: {text: string}) {
    return (
        <div className="containerConfirmationPopUp">
            <div className="contentConfirmationPopUp">
                {props.text}
            </div>
        </div>
    );
}