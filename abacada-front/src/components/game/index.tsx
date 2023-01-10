import React from "react";
import "./style.css";

function Game(props: {name: string, description: string}) {

  function handleClick() {
    console.log("clicou");
  }

  return (
    <div className="card">
      <div className="cardContent" onClick={handleClick}>
        <div className="imageContainer">
          <img src={require("../../assets/user1.png") }/>
        </div>
        <div className="dataContainer">
          <div>
            {props.name}
          </div>
          <div>
            {props.description}
          </div>

        </div>
      </div>
    </div>
  );
}

export default Game;