import React from "react";
import "./style.css";

function Card(props: {name: string}) {
  return (
    <div className="card">
      <div className="cardContent">
        <div className="imageContainer">
          <img src={require("../../assets/user1.png") }/>
        </div>
        <div className="name">
          {props.name}
        </div>
      </div>

    </div>
  );
}

export default Card;