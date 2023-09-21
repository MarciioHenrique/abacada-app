import React from "react";
import "../styles/components/game-image.css";

//O componente Game pega os dados dos jogos e os renderiza na tela
function GameImage(props: {id: string, nome: string, image: string, url: string}) {
  

  const handleClick = () => {
    sessionStorage.setItem("jogo", props.id);
  };

  return (
    <div className="image-container-game-image">
        <img src={require(`../assets/${props.image}`)} className="image-game-image" onClick={handleClick}/>
    </div>
  );
}

export default GameImage;