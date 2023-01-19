import React from "react";
import "./style.css";

function Game(props: {name: string, description: string, image: string}) {

  function handleClick() {
    console.log("clicou");
  }

  return (

      <div className="backgroundGame" onClick={handleClick}>
        <div className="imageContainerGame">
        <img src={require(`../../assets/${props.image}`)} className="imageGame"/>
        </div>
        <div className="dataContainerGame">
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