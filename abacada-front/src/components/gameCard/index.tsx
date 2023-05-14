import React from "react";
import "./style.css";

//O componente Game pega os dados dos jogos e os renderiza na tela
function GameCard(props: {nome: string, descricao: string, image: string, url: string}) {

  return (
    <div className="backgroundGameCard">
      <div className="imageContainerGameCard">
        <img src={require("../../assets/jogo2.jpg")} className="imageGameCard"/>
      </div>
      <div className="dataContainerGameCard">
        <div className="titleGameCard">
          {props.nome}
        </div>
        <div className="descriptionGameCard">
          {props.descricao}
        </div>
      </div>
    </div>
  );
}

export default GameCard;