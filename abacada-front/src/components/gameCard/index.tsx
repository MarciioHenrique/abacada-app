import React from "react";
import "./style.css";

//O componente Game pega os dados dos jogos e os renderiza na tela
function GameCard(props: {name: string, description: string, image: string}) {

  return (
    <div className="backgroundGameCard">
      <div className="imageContainerGameCard">
        <img src={require(`../../assets/${props.image}`)} className="imageGameCard"/>
      </div>
      <div className="dataContainerGameCard">
        <div className="titleGameCard">
          {props.name}
        </div>
        <div className="descriptionGameCard">
          {props.description}
        </div>
      </div>
    </div>
  );
}

export default GameCard;