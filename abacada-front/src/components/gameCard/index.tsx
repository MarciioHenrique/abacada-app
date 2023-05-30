import React from "react";
import "./style.css";

//O componente Game pega os dados dos jogos e os renderiza na tela
function GameCard(props: {nome: string, descricao: string, image: string, url: string, tempoMin: string, tempoSeg: string, concluido: boolean}) {

  return (
    <div className="backgroundGameCard">
      <div className="upperContainer">
        <div className="imageContainerGameCard">
          <img src={require(`../../assets/${props.image}`)} className="imageGameCard"/>
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
      <div className="lowerContainer">
        <div className="timeGameCard">
          {"Tempo: " + props.tempoMin + "m " + props.tempoSeg + "s"}
        </div>
        <div className="conclusionGameCard">
          {props.concluido ? "Concluído: Sim" : "Concluído: Não"}
        </div>
      </div>
      <div className="line"></div>
    </div>
  );
}

export default GameCard;