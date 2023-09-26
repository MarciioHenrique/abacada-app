import React from "react";
import "../styles/components/game-card.css";

//O componente Game pega os dados dos jogos e os renderiza na tela
function GameCard(props: {id: string, nome: string, image: string, url: string}) {
  

  const handleClick = () => {
    sessionStorage.setItem("jogo", props.id);
  };

  return (
    <div className="image-container-game-card">
        <img src={require(`../assets/${props.image}`)} className="image-game-card" onClick={handleClick}/>
    </div>
  );
}

export default GameCard;