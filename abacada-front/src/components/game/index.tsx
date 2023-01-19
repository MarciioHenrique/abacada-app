import React from "react";
import "./style.css";

function Game(props: {name: string, description: string, image: string}) {

  function handleClick() {
    console.log("clicou");
  }

  return (

      <div className="card" onClick={handleClick}>
        <div className="imageGameContainer">
        <img src={require(`../../assets/${props.image}`)} className="imageGame"/>
        </div>
        <div className="dataContainer">
          <div className="titleGame">
            {props.name}
          </div>
          <div className="descriptionGame">
            {props.description}
          </div>

        </div>
      </div>

  );
}

export default Game;