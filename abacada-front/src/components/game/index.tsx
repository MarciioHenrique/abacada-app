import React from "react";
import Iframe from "react-iframe";
import "./style.css";

//Cria o modal dos jogos recentes
// eslint-disable-next-line react/prop-types
function Game({onClose = () => {console.log("vazia");}}): JSX.Element {

  return (
    <div className="containerGame">
      <img src={require("../../assets/Fechar.png")} className="closeGame" onClick={onClose}/>
      <Iframe url="https://abacada-game1.netlify.app/"
              width="100%"
              height="100%"/>
    </div>
  );
}

export default Game;