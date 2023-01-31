import React from "react";
import GameCard from "../gameCard";
import "./style.css";

//Cria o modal dos jogos favoritos
// eslint-disable-next-line react/prop-types
function FavoritesModal({onClose = () => {console.log("vazia");}}): JSX.Element {
  const games = [
    {
      key: 1,
      name: "One Piece",
      description: "Um pirata com uma tripulação que quer ser o Rei dos Piratas",
      image: "jogo1.jpeg",
    },
    {
      key: 2,
      name: "Naruto",
      description: "Uma criança que tem o sonho de ser Hokage",
      image: "jogo1.jpeg",
    },
    {
      key: 3,
      name: "Hunter X Hunter",
      description: "Uma criança que quer se tornar caçador para encontrar o seu pai",
      image: "jogo1.jpeg",
    },
    {
      key: 4,
      name: "Kimetsu no Yaiba",
      description: "Uma criança que quer salvar sua irmã e matar todos os demônios",
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