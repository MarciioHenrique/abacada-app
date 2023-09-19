import React, { useState } from "react";
import "../styles/components/game-modal.css";
import { favoriteRequest, favoriteType, gameModalProps } from "../@types/types";
import { AiOutlineStar, AiFillStar, AiOutlineCloseCircle } from "react-icons/ai";
import { useGameData } from "../hooks/game/useGameData";
import { useFavoriteData } from "../hooks/favorite/useFavoriteData";
import { useStudentData } from "../hooks/student/useStudentData";
import { useFavoriteMutate } from "../hooks/favorite/useFavoriteMutate";
import { useDeleteFavoriteMutate } from "../hooks/favorite/useDeleteFavoriteMutate";

function GameModal(props: gameModalProps) {
  const { data: student } = useStudentData(sessionStorage.getItem("aluno") || "");
  const { data: game } = useGameData(props.game || "");

  let isFavorite = false;
  let favoriteID = "";
  const { mutate: favoriteMutate } = useFavoriteMutate();
  const { mutate: favoriteDelete } = useDeleteFavoriteMutate();
  
  const tam = props.favorites?.length || 0;
  for (let index = 0; index < tam; index++) {
    if (props.favorites?.[index].jogo.id === game?.id) {
      favoriteID = props.favorites?.[index].id || "";
      isFavorite = true;
      break;
    }
  }
  //setIsFavorite(props.favorites?.find((favorite: favoriteType) => favorite.jogo.id === game?.id) ? true : false);
  // if (props.favorites?.find((favorite: favoriteType) => favorite.jogo.id === game?.id)) {
  //   setIsFavorite(true);
  // }

  const handleDeleteFavorite = () => {  
    isFavorite = false;
    favoriteDelete(favoriteID);
  };


  const handleAddFavorite = () => { 
    isFavorite = true;
    const data: favoriteRequest = {
      aluno: student || undefined,
      jogo: game || undefined
    };
    
    favoriteMutate(data);
  };

  const handleFavorite = () => {
    if (isFavorite) {
      handleDeleteFavorite();
    } else {
      handleAddFavorite();
    }
  };

  return (
    <div className="containerGameModal">
        <div className="dataGameModal">
          <AiOutlineCloseCircle className="closeGameModal" color="white" onClick={props.onClose}/>
          <div className="imageContainerGameModal"> 
          { game?.image ? <img src={require(`../assets/${game?.image}`)} alt="Imagem do Jogo" className="gameImageGameModal"/> : null }
           
          </div>
          <div className="infoGameModal">
            <div className="leftInfoGameModal">
              <div className="titleGameModal">
                {game?.nome}
              </div>
              <div className="descriptionGameModal">
                {game?.descricao}
              </div>
              <div className="manualGameModal">
                <p style={{marginBottom: "1vh", fontSize: 16}}>Como jogar:</p>
                <ol>
                  <li style={{fontSize: 14}}>Regra 1</li>
                  <li style={{fontSize: 14}}>Regra 2</li>
                  <li style={{fontSize: 14}}>Regra 3</li>
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