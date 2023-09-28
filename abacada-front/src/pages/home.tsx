import React, { useEffect, useState } from "react";
import GameCardHistoric from "../components/game-card-historic";
import Game from "../components/game";
import "../styles/pages/home.css";
import useAuth from "../hooks/auth/useAuth";
import { AuthContextType, gameType, historicRequest } from "../@types/types";
import { useNavigate } from "react-router-dom";
import userServices from "../services/userServices";
import { CgProfile } from "react-icons/cg";
import { BsGear } from "react-icons/bs";
import { BiExit } from "react-icons/bi";
import { AiOutlineUserSwitch } from "react-icons/ai";
import GameModal from "../components/game-modal";
import { useGamesRecommendedData } from "../hooks/game/useGamesRecommendedData";
import { useFavoriteData } from "../hooks/favorite/useFavoriteData";
import { useHistoricData } from "../hooks/historic/useHistoricData";
import { useStudentData } from "../hooks/student/useStudentData";
import AllGamesModal from "../components/all-games-modal";
import GameCard from "../components/game-card";
import { useGameData } from "../hooks/game/useGameData";
import { ToastContainer, toast } from "react-toastify";
import { useHistoricMutate } from "../hooks/historic/useHistoricMutate";

//pagina home
function Home() {
  const vogais = ["A", "O", "U", "I", "E"];
  const estagios = ["Sílaba", "Palavra", "Frase", "Texto"];

  const registroAluno = sessionStorage.getItem("aluno");
  const idJogo = sessionStorage.getItem("jogo");
  const [firstRender, setFirstRender] = useState(true);
  
  const { data: student } = useStudentData(registroAluno || undefined);
  const { data: favorites } = useFavoriteData(student?.registro || undefined);
  const { data: historic} = useHistoricData(student?.registro || undefined);

  const [vogal, setVogal] = useState(student?.vogal);
  const [estagio, setEstagio] = useState(student?.estagio);
  const { data: games } = useGamesRecommendedData(vogal || undefined, estagio || undefined);
  const { data: game } = useGameData(sessionStorage.getItem("jogo") || undefined);
  const { mutate: mutateHistoric, data: dataHistoric, isSuccess  } = useHistoricMutate();
  
  const [isGameModalVisible, setIsGameModalVisible] = useState(false);

  const navigate = useNavigate();
  const { signout } = useAuth() as AuthContextType;
  const [error, setError] = useState("");
  const [isGameVisible, setIsGameVisible] = useState(false);

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

  const trocarAluno = () => {
    sessionStorage.removeItem("aluno");
    navigate("/alunos");
  };

  const exit = () => {
    sessionStorage.removeItem("instituicao");
    sessionStorage.removeItem("professor");
    sessionStorage.removeItem("aluno");
    sessionStorage.removeItem("jogo");
    sessionStorage.removeItem("historico");
    signout;
    navigate("/");
  };

  useEffect(() => {
    setEstagio(student?.estagio);
    setVogal(student?.vogal);
  }, [student]);

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
    <div className="background-home">
      <div className="background-left-home">
        <div className="header-container-home">
          <div className="header-card-home">
            <label>ABACADA</label>
            {student && <img src={require(`../assets/banners/${student?.heroi.banner}`)} className="banner-home" /> }
          </div>
        </div>
        <div className="games-container-home">
          <label className="label-section-title-home">FAVORITOS</label>
          {(favorites?.length || 0) > 0 ? 
            <div className="games-home" style={{width:  (favorites?.length || 0) * 150}} onClick={() => setIsGameModalVisible(true)}>
            {favorites?.map((game) =>
              <GameCard key={game.id} game={game.jogo} isAllGamesPage={false}/>
            )}
            </div> :
            <div className="games-home" style={{width: "100%", height: "25vh"}} onClick={() => setIsGameModalVisible(true)}>
              <label style={{margin: 20}}> O aluno não possui jogos favoritos</label>
            </div>  
          }
          <label className="label-section-title-home">JOGOS RECOMENDADOS</label>
          {(games?.length || 0) > 0 ? 
            <div className="games-home" style={{width: (games?.length || 0) * 150}} onClick={() => setIsGameModalVisible(true)}>
              {(games?.length || 0) > 0 && games?.map((game)=> (
                <GameCard key={game.id} game={game} isAllGamesPage={false}/>
              ))} 
            </div> :
            <div className="games-home" style={{width: "100%", height: "25vh"}} onClick={() => setIsGameModalVisible(true)}>
              <label style={{margin: 20}}> Não foram encontrados jogos recomendados ao seu nível</label>
            </div>  
          }
        </div>
        <div className="footer-container-home">
          <div className="footer-inputs-home">
            <label> Selecione o nível dos jogos: </label>
            <select className="footer-selects-home" required defaultValue={vogal
            } onChange={(e) => setVogal(e.target.value)}>
              {vogais?.map((vogal) => 
                <option key={vogal} value={vogal}>{vogal}</option>
              )}
            </select>
            <select className="footer-selects-home" required defaultValue={estagio} onChange={(e) => setEstagio(e.target.value)}>
              {estagios?.map((estagio) => 
                <option key={estagio} value={estagio}>{estagio}</option>
              )}
            </select>
          </div>

          <div className="footer-content-home" onClick={() => navigate("/jogos")}>MOSTRAR JOGOS</div>
        </div>
      </div>
      <div className="background-right-home">
        <div className="option-buttons-container-home">
          <div className="option-button-box-home" onClick={() => alert("clicou")}>
            <CgProfile className="option-image-home"/>
            <label className="option-image-description">Perfil</label>
          </div>
          <div className="option-button-box-home" onClick={trocarAluno}>
            <AiOutlineUserSwitch className="option-image-home" />
            <label className="option-image-description">Trocar Aluno</label>
          </div>
          <div className="option-button-box-home" onClick={() => alert("clicou")}>
            <BsGear className="option-image-home"/>
            <label className="option-image-description">Config</label>
          </div>
          <div className="option-button-box-home" onClick={exit}>
            <BiExit className="option-image-home"/>
            <label className="option-image-description">Sair</label>
          </div>
        </div>
        <div className="history-container-home">
          <div className="history-content-home">
            <label className="history-label-title-home">HISTÓRICO</label>
            <div className="history-list-home">
              {(historic?.length || 0) > 0 ? historic?.map((game) =>
                  <GameCardHistoric key={game.id} nome={game.jogo.nome} descricao={game.jogo.descricao} image={game.jogo.image} url={game.jogo.url} tempoMin={game.tempoMin} tempoSeg={game.tempoSeg} concluido={game.concluido}/>
              ) : <label style={{margin: 20}}> O aluno não possui histórico de jogos</label>}
            </div> 
          </div>
        </div>

      </div>
      <ToastContainer />
      {isGameModalVisible ? <GameModal game={game} favorites={favorites} onClickPlay={handleOnClickPlay} onClose={handleOnClose}/> : null}
      {isGameVisible ? <Game onClose={ () => setIsGameVisible(false)}/> : null}
    </div>
  );
}

export default Home;