import React from "react";
import "../styles/components/game-card.css";

interface GameCardProps {
  id: string;
  nome: string;
  descricao: string;
  image: string;
  url: string;
}

//O componente Game pega os dados dos jogos e os renderiza na tela
function GameCard(props: GameCardProps) {
  const handleClick = () => {
    sessionStorage.setItem("jogo", props.id);
  };

  return (
    <div className="background-game-card">
      <div className="image-conteiner-game-card">
        <img src={require(`../assets/${props.image}`)} className="image-game-card" onClick={handleClick}/>
      </div>
      <div className="data-conteiner-game-card">
        <div className="name-game-card">{props.nome}</div>
        <div className="description-game-card">{props.descricao}</div>
      </div>  
    </div>
  );
}

export default GameCard;