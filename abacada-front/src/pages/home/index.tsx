import React, { useState } from "react";
import GameCard from "../../components/gameCard";
import RecentsModal from "../../components/recentsModal";
import FavoritesModal from "../../components/favoritesModal";
import Game from "../../components/game";
import "./style.css";
import useAuth from "../../hooks/useAuth";
import { AuthContextType } from "../../@types/types";
import { useNavigate } from "react-router-dom";

//pagina home
function Home() {
  const games = [
    {
      key: 1,
      name: "Título do Jogo",
      description: "Descrição do Jogo",
      image: "jogo1.jpeg",
    },
    {
      key: 2,
      name: "Título do Jogo",
      description: "Descrição do Jogo",
      image: "jogo1.jpeg",
    },
    {
      key: 3,
      name: "Título do Jogo",
      description: "Descrição do Jogo",
      image: "jogo1.jpeg",
    },
    {
      key: 4,
      name: "Título do Jogo",
      description: "Descrição do Jogo",
      image: "jogo1.jpeg",
    },
  ];

  const navigate = useNavigate();
  const { signout } = useAuth() as AuthContextType;
  const [isRecentsVisible, setIsRecentsVisible] = useState(false);
  const [isFavoritesVisible, setIsFavoritesVisible] = useState(false);
  const [isGameVisible, setIsGameVisible] = useState(false);

  const exit = () => {
    signout;
    navigate("/");
  };

  return (
    <div className="fundo">
      <div className="barraLateralEsquerda">
        <img  src={require("../../assets/Exit.png")} 
              className="imagesE"
              onClick={exit}/>
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