import React, { useState } from "react";
import Iframe from "react-iframe";
import "./style.css";

//Cria o modal dos jogos recentes
// eslint-disable-next-line react/prop-types
function Game({onClose = () => {console.log("vazia");}}): JSX.Element {
  const idHistorico = sessionStorage.getItem("historico");
  const jogo = "https://64753b4475551f0bb24304d1--astounding-madeleine-be42aa.netlify.app/?id="+idHistorico;
  return (
    <div className="containerGame">
      <img src={require("../../assets/Fechar.png")} className="closeGame" onClick={onClose}/>
      <Iframe url={jogo}
              width="100%"
              height="100%"
      />
    </div>
  );
}

export default Game;