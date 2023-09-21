import React, { useState } from "react";
import Iframe from "react-iframe";
import "../styles/components/game.css";

//Cria o modal dos jogos recentes
// eslint-disable-next-line react/prop-types
function Game({onClose = () => {console.log("vazia");}}): JSX.Element {
  const idHistorico = sessionStorage.getItem("historico");
  const url = sessionStorage.getItem("url");
  const jogo = url+"?id="+idHistorico;
  return (
    <div className="container-game">
      <img src={require("../assets/Fechar.png")} className="close-game" onClick={onClose}/>
      <Iframe url={jogo}
              width="100%"
              height="100%"
      />
    </div>
  );
}

export default Game;