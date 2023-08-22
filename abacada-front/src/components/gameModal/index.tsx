import React, { useState } from "react";
import "./style.css";
import { gameModalProps } from "../../@types/types";
import { AiOutlineStar, AiFillStar, AiOutlineCloseCircle } from "react-icons/ai";

function GameModal(props: gameModalProps) {

  const [isFavorite, setIsFavorite] =useState(true);

  return (
    <div className="containerGameModal">
        <div className="dataGameModal">
          <AiOutlineCloseCircle className="closeGameModal" color="white" onClick={props.onClose}/>
          <div className="imageContainerGameModal"> 
            <img src={require("../../assets/jogo1.png")} alt="Imagem do Jogo" className="gameImageGameModal"/>
          </div>
          <div className="infoGameModal">
            <div className="leftInfoGameModal">
              <div className="titleGameModal">
                <h2>Nome do Jogo</h2>
              </div>
              <div className="descriptionGameModal">
                <p>Descrição do Jogo</p>
              </div>
              <div className="manualGameModal">
                <p style={{marginBottom: "1vh"}}>Como jogar:</p>
                <ol>
                  <li>Regra 1</li>
                  <li>Regra 2</li>
                  <li>Regra 3</li>

                </ol>



              </div>
            </div>
            <div className="rightInfoGameModal">
              <div className="itensGameModal"> 
                <button className="buttonPlayGameModal" onClick={() => alert("clicou")}>Jogar</button>

                {isFavorite ?
                  <AiFillStar size={40} color="#FFD700" className="buttonFavoriteGameModal" onClick={() => setIsFavorite(!isFavorite)}/> :
                  <AiOutlineStar size={40} color="#FFD700" className="buttonFavoriteGameModal" onClick={() => setIsFavorite(!isFavorite)}/>
                }
              
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default GameModal;