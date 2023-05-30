import React from "react";
import "./style.css";

//O componente Game pega os dados dos jogos e os renderiza na tela
function GameImage(props: {id: string, nome: string, image: string, url: string}) {

  return (
    <div className="imageContainerGameImage">
        <img src={require(`../../assets/${props.image}`)} className="imageGameImage" onClick={() => sessionStorage.setItem("jogo", props.id)}/>
    </div>
  );
}

export default GameImage;