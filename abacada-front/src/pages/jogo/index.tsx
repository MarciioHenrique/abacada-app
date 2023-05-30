import React from "react";
import "./style.css";
import Iframe from "react-iframe";

//pagina dos alunos
function Jogo() {

  return (
    <div className="fundoJogo">
        <Iframe url="../../games/game/index.html" />
    </div>
  );
}

export default Jogo;