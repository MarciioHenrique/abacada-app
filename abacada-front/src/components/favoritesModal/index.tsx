import React from "react";
import GameCard from "../gameCard";
import "./style.css";

//Cria o modal dos jogos favoritos
// eslint-disable-next-line react/prop-types
function FavoritesModal({onClose = () => {console.log("vazia");}}): JSX.Element {
  const games = [
    {
      key: 1,
      name: "Título do Jogo",
      description: "Descrição do Jogo",
      image: "jogo1.jpeg",
    },
    {
      key: 2,
      name: "Título do Jogo",
      description: "Descrição do Jogo",
      image: "jogo1.jpeg",
    },
    {
      key: 3,
      name: "Título do Jogo",
      description: "Descrição do Jogo",
      image: "jogo1.jpeg",
    },
    {
      key: 4,
      name: "Título do Jogo",
      description: "Descrição do Jogo",
      image: "jogo1.jpeg",
    },
  ];

  function renderGame (game:any){
    return (
      <div>
        <GameCard key={game.key} name={game.name} description={game.description} image={game.image}/>
        <div className="informationFavorites">
          <div>
            Tempo jogado: 01h e 12min
          </div>
          <div>
            Concluído: Sim
          </div>
        </div>
        <div className="line"></div>
      </div>
    );
  }

  return (
    <div className="containerFavorites">
      <div className="contentFavorites">
        <div className="headerFavorites">
          <img src={require("../../assets/Fechar.png")} className="closeFavorites" onClick={onClose}/>
          <h2 className="titleFavorites">RECENTES</h2>
        </div>
        <h3 className="subtitleFavorites">JOGOS</h3>
        <div className="gamesFavorites">
          {games.map((game) => renderGame(game))}
        </div>

      </div>
    </div>
  );
}

export default FavoritesModal;