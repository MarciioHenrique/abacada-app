import React from "react";
import "../styles/components/game-card-historic.css";

//O componente Game pega os dados dos jogos e os renderiza na tela

//criar uma interface para as props
function GameCardHistoric(props: {nome: string, descricao: string, image: string, url: string, tempoMin: string, tempoSeg: string, concluido: boolean}) {

  let tempo = "";
    if (props.tempoMin != "" && props.tempoSeg != "") {
      tempo = "Tempo: "+props.tempoMin+"m "+props.tempoSeg+"s ";
    }
    else {
      tempo = "Tempo: 0m 0s";
    }

  return (
    <div className="background-game-card-historic">
      <div className="upper-container-game-card-historic">
        <div className="image-container-game-card-historic">
          <img src={require(`../assets/${props.image}`)} className="image-game-card-historic"/>
        </div>
        <div className="data-container-game-card-historic">
          <div className="title-game-card-historic">
            {props.nome}
          </div>
          <div className="description-game-card-historic">
            {props.descricao}
          </div>
        </div>
      </div>
      <div className="lower-container-game-card-historic">
        <div className="time-game-card-historic">
          {tempo}
        </div>
        <div className="conclusion-game-card-historic">
          {props.concluido ? "Concluído: Sim" : "Concluído: Não"}
        </div>
      </div>
      <div className="line-game-card-historic"></div>
    </div>
  );
}

export default GameCardHistoric;