import React, { useState } from "react";
import "../styles/components/game-row.css";
import { favoriteType, gameType } from "../@types/types";
import GameImage from "./game-card";
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
    <div className="list-area-game-row">
      {/* <div className="navigate-before-game-row" onClick={handleMoveLeft}>
        <MdNavigateBefore/>
      </div>
      <div className="navigate-next-game-row" onClick={handleMoveRight}>
        <MdNavigateNext/>
      </div> */}
      <div className="list-game-row">
        {(props.games?.length || 0) > 0 && props.games?.map((game)=> (
          <GameImage key={game.id} game={game} isAllGamesPage={false}/>
        ))}
      </div>       
    </div>
  );
}