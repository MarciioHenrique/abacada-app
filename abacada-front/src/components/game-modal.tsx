import React, { useState } from "react";
import "../styles/components/game-modal.css";
import { favoriteRequest, favoriteType, gameModalProps } from "../@types/types";
import { AiOutlineStar, AiFillStar, AiOutlineCloseCircle } from "react-icons/ai";
import { useGameData } from "../hooks/game/useGameData";
import { useStudentData } from "../hooks/student/useStudentData";
import { useFavoriteMutate } from "../hooks/favorite/useFavoriteMutate";
import { useDeleteFavoriteMutate } from "../hooks/favorite/useDeleteFavoriteMutate";

function GameModal(props: gameModalProps) {
  const { data: student } = useStudentData(sessionStorage.getItem("aluno") || "");

  let isFavorite = false;
  let favoriteID = "";
  const { mutate: favoriteMutate } = useFavoriteMutate();
  const { mutate: favoriteDelete } = useDeleteFavoriteMutate();
  
  const tam = props.favorites?.length || 0;
  for (let index = 0; index < tam; index++) {
    if (props.favorites?.[index].jogo.id === props.game?.id) {
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
      jogo: props.game || undefined
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
    <div className="container-game-modal">
        <div className="data-game-modal">
          <AiOutlineCloseCircle className="close-game-modal" color="white" onClick={props.onClose}/>
          <div className="image-container-game-modal"> 
          { props.game?.image ? <img src={require(`../assets/${props.game?.image}`)} alt="Imagem do Jogo" className="game-image-game-modal"/> : null }
           
          </div>
          <div className="info-game-modal">
            <div className="left-info-game-modal">
              <div className="title-game-modal">
                {props.game?.nome}
              </div>
              <div className="description-game-modal">
                {props.game?.descricao}
              </div>
              <div className="manual-game-modal">
                <p style={{marginBottom: "1vh", fontSize: 16}}>Como jogar:</p>
                <ol>
                  <li style={{fontSize: 14}}>Regra 1</li>
                  <li style={{fontSize: 14}}>Regra 2</li>
                  <li style={{fontSize: 14}}>Regra 3</li>
                </ol>
              </div>
            </div>
            <div className="right-info-game-modal">
              <div className="itens-game-modal"> 
                <button className="button-play-game-modal" onClick={props.onClickPlay}>Jogar</button>

                {isFavorite ?
                  <AiFillStar size={40} color="#FFD700" className="button-favorite-game-modal" onClick={() => handleFavorite()}/> :
                  <AiOutlineStar size={40} color="#FFD700" className="button-favorite-game-modal" onClick={() => handleFavorite()}/>
                }
              
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default GameModal;