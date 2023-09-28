import React from "react";
import "../styles/components/game-card.css";
import { gameType } from "../@types/types";

interface GameCardProps {
  game: gameType,
  isAllGamesPage: boolean
}

//O componente Game pega os dados dos jogos e os renderiza na tela
function GameCard(props: GameCardProps) {
  const handleClick = () => {
    sessionStorage.setItem("jogo", props.game.id);
  };

  return (
    <div className={props.isAllGamesPage ? "background-game-card" : "background-game-card-small"} onClick={handleClick}>
      <div className={props.isAllGamesPage ? "image-conteiner-game-card" : "image-conteiner-game-card-small"}>
        <img src={require(`../assets/${props.game.image}`)} className={props.isAllGamesPage ? "image-game-card" : "image-game-card-small"}/>
      </div>
      <div className={props.isAllGamesPage ? "data-conteiner-game-card" : "data-conteiner-game-card-small"}>
        <div className={props.isAllGamesPage ? "name-game-card" : "name-game-card-small"}>{props.game.nome}</div>
        <div className={props.isAllGamesPage ? "description-game-card" : "description-game-card-small"}>{props.game.descricao}</div>
        <div className={props.isAllGamesPage ? "level-game-card" : "level-game-card-small"}>{props.game.vogal} - {props.game.estagio}</div>
      </div>  
    </div>
  );
}

export default GameCard;