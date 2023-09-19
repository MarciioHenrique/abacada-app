import React, { useState } from "react";
import "../styles/components/game-row.css";
import { favoriteType, gameType } from "../@types/types";
import GameImage from "./game-image";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";

export default function GameRow(props: {games: gameType[] | undefined}) {
  const [scrollX, setScrollX] = useState(0);
  
  function handleMoveLeft() {
    let x = scrollX + 150;
    if (x > 0) {
      x = 0;
    }
    setScrollX(x);
  }

  const handleMoveRight = () => {
    let x = scrollX - 150;
    if(x < -1*((props.games?.length || 0) * 150)) {
      x = -1*((props.games?.length || 0) * 150);
    }
    setScrollX(x);
    console.log("largura max: "+ -1*((props.games?.length || 0) * 150));
    console.log("x atual: "+ x);
  };
  
  return (
    <div className="gameRow--listarea">
      {/* <div className="navigateBefore" onClick={handleMoveLeft}>
        <MdNavigateBefore/>
      </div>
      <div className="navigateNext" onClick={handleMoveRight}>
        <MdNavigateNext/>
      </div> */}
      <div className="gameRow--list">
        {(props.games?.length || 0) > 0 && props.games?.map((game)=> (
          <GameImage key={game.id} id={game.id} nome={game.nome} image={game.image} url={game.url}/>
        ))}
      </div>       
    </div>
  );
}