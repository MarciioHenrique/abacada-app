import React from "react";
import GameCard from "../gameCard";
import "./style.css";

//Cria o modal dos jogos recentes
// eslint-disable-next-line react/prop-types
function RecentsModal({onClose = () => {console.log("vazia");}}): JSX.Element {
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
        <div className="informationRecents">
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
    <div className="containerRecents">
      <div className="contentRecents">
        <div className="headerRecents">
          <img src={require("../../assets/Fechar.png")} className="closeRecents" onClick={onClose}/>
          <h2 className="titleRecents">RECENTES</h2>
        </div>
        <h3 className="subtitleRecents">JOGOS</h3>
        <div className="gamesRecents">
          {games.map((game) => renderGame(game))}
        </div>

      </div>
    </div>
  );
}

export default RecentsModal;