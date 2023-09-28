import React, { useEffect, useMemo, useState } from "react";
import "../styles/pages/games.css";
import { useGamesData } from "../hooks/game/useGamesData";
import GameImage from "../components/game-card";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { BsFilter } from "react-icons/bs";
import GameModal from "../components/game-modal";
import Game from "../components/game";
import { useFavoriteData } from "../hooks/favorite/useFavoriteData";
import { useStudentData } from "../hooks/student/useStudentData";
import userServices from "../services/userServices";
import { useGameData } from "../hooks/game/useGameData";
import { historicRequest } from "../@types/types";
import { useHistoricMutate } from "../hooks/historic/useHistoricMutate";

function Games() {
  const [firstRender, setFirstRender] = useState(true);
  const registroAluno = sessionStorage.getItem("aluno");
  const { data: student } = useStudentData(registroAluno || undefined);
  const { data: games } = useGamesData();
  const { data: game } = useGameData(sessionStorage.getItem("jogo") || undefined);
  const { data: favorites } = useFavoriteData(student?.registro || undefined);
  const { mutate: mutateHistoric, data: dataHistoric, isSuccess  } = useHistoricMutate();
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState(false);
  const [isGameVisible, setIsGameVisible] = useState(false);
  const [isGameModalVisible, setIsGameModalVisible] = useState(false);
  const navigate = useNavigate();

  const filteredGames = useMemo(() => {
    return games?.filter((game) => {
      return game.nome.toLowerCase().includes(search.toLowerCase());
    });
  }, [games, search]);

  function handleFilterClick() {
    setFilter(!filter);
  }

  const handleOnClickPlay = () => {
    const data: historicRequest = {
      aluno: student,
      jogo: game,
      tempoMin: "",
      tempoSeg: "",
      concluido: false
    };

    mutateHistoric(data);
  };

  const handleOnClose = () => {
    setIsGameModalVisible(false);
    sessionStorage.removeItem("jogo");
    sessionStorage.removeItem("historico");
    sessionStorage.removeItem("url");
  };

  useEffect(() => {
    if (firstRender) {
      setFirstRender(false);
      return;
    }
    sessionStorage.setItem("url", game?.url || "");
    dataHistoric?.data.id && sessionStorage.setItem("historico", dataHistoric.data.id);
    dataHistoric?.data.id && setIsGameVisible(true);
  }, [isSuccess]);

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
        <div className="games-container-games" onClick={() => setIsGameModalVisible(true)}>
          {(filteredGames?.length || 0) > 0 ? 
            filteredGames?.map((game) =>
              <GameImage key={game.id} game={game} isAllGamesPage={true}/>
            ) :
            <label style={{margin: 20}}> Não foram encontrados jogos com o nome digitado</label>
          }
        </div>
        {/* <div className="filter-container-games">
            <button onClick={handleFilterClick}>
              <BsFilter size="lg"/>
            </button>
            <div className={filter ? "filter-enabled-games" : "filter-disabled-games"}>
              <input type="checkbox" />
            </div>
        </div> */}
      </div>
      {isGameModalVisible ? <GameModal game={game} favorites={favorites} onClickPlay={handleOnClickPlay} onClose={handleOnClose}/> : null}
      {isGameVisible ? <Game onClose={ () => setIsGameVisible(false)}/> : null}
    </div>
  );
}

export default Games;