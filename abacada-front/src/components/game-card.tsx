import React from "react";
import "../styles/components/game-card.css";

//O componente Game pega os dados dos jogos e os renderiza na tela
function GameCard(props: {nome: string, descricao: string, image: string, url: string, tempoMin: string, tempoSeg: string, concluido: boolean}) {

  let tempo = "";
    if (props.tempoMin != "" && props.tempoSeg != "") {
      tempo = "Tempo: "+props.tempoMin+"m "+props.tempoSeg+"s ";
    }
    else {
      tempo = "Tempo: 0m 0s";
    }

  return (
    <div className="background-game-card">
      <div className="upper-container-game-card">
        <div className="image-container-game-card">
          <img src={require(`../assets/${props.image}`)} className="image-game-card"/>
        </div>
        <div className="data-container-game-card">
          <div className="title-game-card">
            {props.nome}
          </div>
          <div className="description-game-card">
            {props.descricao}
          </div>
        </div>
      </div>
      <div className="lower-container-game-card">
        <div className="time-game-card">
          {tempo}
        </div>
        <div className="conclusion-game-card">
          {props.concluido ? "Concluído: Sim" : "Concluído: Não"}
        </div>
      </div>
      <div className="line-game-card"></div>
    </div>
  );
}

export default GameCard;