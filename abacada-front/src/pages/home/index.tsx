import React from "react";
import Game from "../../components/game";
import "./style.css";

function Home() {
  return (
    <div className="fundo">
      <div className="barraLateral">
        <img src={require("../../assets/Exit.png")} className="images"/>
        <img src={require("../../assets/Config.png")} className="images"/>
      </div>
      <div className="tela">
        <Game name="One Piece" description="bom dms"/>
      </div>
    </div>
  );
}

export default Home;