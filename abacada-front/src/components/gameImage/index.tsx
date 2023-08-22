import React, { useState } from "react";
import "./style.css";
import { useHistoricMutate } from "../../hooks/historic/useHistoricMutate";
import { useStudentData } from "../../hooks/student/useStudentData";
import { useGameData } from "../../hooks/game/useGameData";
import { historicRequest } from "../../@types/types";


//O componente Game pega os dados dos jogos e os renderiza na tela
function GameImage(props: {id: string, nome: string, image: string, url: string}) {
  

  const handleClick = () => {
    sessionStorage.setItem("jogo", props.id);
  };

  return (
    <div className="imageContainerGameImage">
        <img src={require(`../../assets/${props.image}`)} className="imageGameImage" onClick={handleClick}/>
    </div>
  );
}

export default GameImage;