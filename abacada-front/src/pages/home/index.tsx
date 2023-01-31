import React, { useState } from "react";
import GameCard from "../../components/gameCard";
import RecentsModal from "../../components/recentsModal";
import FavoritesModal from "../../components/favoritesModal";
import Game from "../../components/game";
import "./style.css";

//pagina home
function Home() {
  const games = [
    {
      key: 1,
      name: "One Piece",
      description: "Um pirata com uma tripulação que quer ser o Rei dos Piratas",
      image: "jogo1.jpeg",
    },
    {
      key: 2,
      name: "Naruto",
      description: "Uma criança que tem o sonho de ser Hokage",
      image: "jogo1.jpeg",
    },
    {
      key: 3,
      name: "Hunter X Hunter",
      description: "Uma criança que quer se tornar caçador para encontrar o seu pai",
      image: "jogo1.jpeg",
    },
    {
      key: 4,
      name: "Kimetsu no Yaiba",
      description: "Uma criança que quer salvar sua irmã e matar todos os demônios",
      image: "jogo1.jpeg",
    },
  ];

  const [isRecentsVisible, setIsRecentsVisible] = useState(false);
  const [isFavoritesVisible, setIsFavoritesVisible] = useState(false);
  const [isGameVisible, setIsGameVisible] = useState(false);

  return (
    <div className="fundo">
      <div className="barraLateralEsquerda">
        <img src={require("../../assets/Exit.png")} className="imagesE"/>
        <img src={require("../../assets/Config.png")} className="imagesE"/>
      </div>
      <div className="tela">
        <div className="headerContainer">
          <div className="form">ABACADA</div>
        </div>
        <div className="gamesContainer">
          <label className="title">JOGOS</label>
          <div className="games" onClick={() => setIsGameVisible(true)}>
            {games.map((game) =>
              <GameCard key={game.key} name={game.name} description={game.description} image={game.image}/>
            )}
          </div>
        </div>
      </div>
      <div className="barraLateralDireita">
        <div className="superior">
          <img  src={require("../../assets/Favoritos.png")}
                className="imagesD"
                onClick={() => setIsFavoritesVisible(true)}
          />
          <img src={require("../../assets/Perfil.png")} className="imagesD"/>
        </div>
        <div className="inferior">
          <img  src={require("../../assets/Recentes.png")}
                className="recentes"
                onClick={() => setIsRecentsVisible(true)}
          />
        </div>

      </div>
      {isRecentsVisible ? <RecentsModal onClose={ () => setIsRecentsVisible(false)}/> : null}
      {isGameVisible ? <Game onClose={ () => setIsGameVisible(false)}/> : null}
      {isFavoritesVisible ? <FavoritesModal onClose={ () => setIsFavoritesVisible(false)}/> : null}
    </div>
  );
}

export default Home;