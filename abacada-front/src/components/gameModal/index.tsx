import React, { useState } from "react";
import "./style.css";
import { favoriteRequest, favoriteType, gameModalProps } from "../../@types/types";
import { AiOutlineStar, AiFillStar, AiOutlineCloseCircle } from "react-icons/ai";
import { useGameData } from "../../hooks/game/useGameData";
import { useFavoriteData } from "../../hooks/favorite/useFavoriteData";
import { useStudentData } from "../../hooks/student/useStudentData";
import { useFavoriteMutate } from "../../hooks/favorite/useFavoriteMutate";

function GameModal(props: gameModalProps) {
  const { data: student } = useStudentData(sessionStorage.getItem("aluno") || "");
  const { data: game } = useGameData(props.game || "");
  const { data: favorites } = useFavoriteData(sessionStorage.getItem("registroAluno") || "");
  const [isFavorite, setIsFavorite] = useState(false);
  const { mutate, isError, isSuccess, isLoading } = useFavoriteMutate();

  
  console.log(favorites);
  if (favorites?.find((favorite: favoriteType) => favorite.jogo.id === game?.id)) {
    setIsFavorite(true);
  }

  const handleFavorite = () => { 
    setIsFavorite(!isFavorite);
    const data: favoriteRequest = {
      aluno: student || undefined,
      jogo: game || undefined
    };
    
    mutate(data);
  };

  return (
    <div className="containerGameModal">
        <div className="dataGameModal">
          <AiOutlineCloseCircle className="closeGameModal" color="white" onClick={props.onClose}/>
          <div className="imageContainerGameModal"> 
           <img src={require(`../../assets/${game?.image}`)} alt="Imagem do Jogo" className="gameImageGameModal"/>
          </div>
          <div className="infoGameModal">
            <div className="leftInfoGameModal">
              <div className="titleGameModal">
                <h2>{game?.nome}</h2>
              </div>
              <div className="descriptionGameModal">
                <p>{game?.descricao}</p>
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
                <button className="buttonPlayGameModal" onClick={props.onClickPlay}>Jogar</button>

                {isFavorite ?
                  <AiFillStar size={40} color="#FFD700" className="buttonFavoriteGameModal" onClick={() => handleFavorite()}/> :
                  <AiOutlineStar size={40} color="#FFD700" className="buttonFavoriteGameModal" onClick={() => handleFavorite()}/>
                }
              
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default GameModal;