import React, { useMemo, useState } from "react";
import "../styles/pages/games.css";
import { useGamesData } from "../hooks/game/useGamesData";
import GameImage from "../components/game-card";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

function Games() {
  
  const { data: games } = useGamesData();
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const filteredGames = useMemo(() => {
    return games?.filter((game) => {
      return game.nome.toLowerCase().includes(search.toLowerCase());
    });
  }, [games, search]);

  return (
    <div className="background-games">
      <div className="header-container-games">
        <div className="input-container-games"> 
          <input  type="text"
                  name="nome"
                  className="input-games"
                  placeholder="Digite o nome do jogo"
                  value={search}
                  onChange={(e: React.FormEvent) => setSearch((e.target as HTMLInputElement).value)}
          ></input>
        </div>
        <label className="label-go-back-games" onClick={() => navigate("/home")}>
          <BiArrowBack size={30} color="#1D3557" />
          VOLTAR PARA A TELA PRINCIPAL
        </label>
      </div>
      <div className="data-container-games">
        <div className="games-container-games">
          {(filteredGames?.length || 0) > 0 ? 
            filteredGames?.map((game) =>
              <GameImage key={game.id} id={game.id} nome={game.nome} descricao={game.descricao} image={game.image} url={game.image}/>
            ) :
            <label style={{margin: 20}}> Não foram encontrados jogos com o nome digitado</label>
          }
        </div>
        <div className="filter-container-games">

        </div>
      </div>
    </div>
  );
}

export default Games;