import React, { useEffect, useState } from "react";
import GameCard from "../components/game-card";
import Game from "../components/game";
import "../styles/pages/home.css";
import useAuth from "../hooks/auth/useAuth";
import { AuthContextType } from "../@types/types";
import { useNavigate } from "react-router-dom";
import userServices from "../services/userServices";
import { CgProfile } from "react-icons/cg";
import { BsGear } from "react-icons/bs";
import { BiExit } from "react-icons/bi";
import { AiOutlineUserSwitch } from "react-icons/ai";
import GameImage from "../components/game-image";
import GameModal from "../components/game-modal";
import { useGamesRecommendedData } from "../hooks/game/useGamesRecommendedData";
import { useFavoriteData } from "../hooks/favorite/useFavoriteData";
import { useHistoricData } from "../hooks/historic/useHistoricData";
import { useStudentData } from "../hooks/student/useStudentData";
import AllGamesModal from "../components/all-games-modal";

//pagina home
function Home() {
  const vogais = ["A", "O", "U", "I", "E"];
  const estagios = ["Sílaba", "Palavra", "Frase", "Texto"];

  const registroAluno = sessionStorage.getItem("aluno");
  const idJogo = sessionStorage.getItem("jogo");
  
  const { data: student } = useStudentData(registroAluno || undefined);
  const { data: favorites } = useFavoriteData(student?.registro || undefined);
  const { data: historic} = useHistoricData(student?.registro || undefined);

  const [vogal, setVogal] = useState(student?.vogal);
  const [estagio, setEstagio] = useState(student?.estagio);
  const { data: games } = useGamesRecommendedData(vogal || undefined, estagio || undefined);
  //const { mutate,  } = useHistoricMutate();
  
  const [isGameModalVisible, setIsGameModalVisible] = useState(false);

  const navigate = useNavigate();
  const { signout } = useAuth() as AuthContextType;
  const [error, setError] = useState("");
  const [isGameVisible, setIsGameVisible] = useState(false);
  const [isAllGamesModalVisible, setIsAllGamesModalVisible] = useState(false);

  const handleNovoHistorico = () => {

    // const data: historicRequest = {
    //   aluno: student,
    //   jogo: game,
    //   tempoMin: "",
    //   tempoSeg: "",
    //   concluido: false
    // };

    // const response = mutate(data);
    // console.log(response);
    

    userServices.getJogo(sessionStorage.getItem("jogo"))
      .then(jogo => {
        sessionStorage.setItem("url", jogo.url);
        userServices.addHistorico(student, jogo)
          .then(res => {
            sessionStorage.setItem("historico", res.id);
            setIsGameModalVisible(true);
          })
          .catch(error => console.log(error));
      })
      .catch(error => console.log(error));

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

  return (
    <div className="background-home">
      <div className="background-left-home">
        <div className="header-container-home">
          <div className="header-card-home">ABACADA
            {student && <img src={require(`../assets/banners/${student?.heroi.banner}`)} className="banner-home" /> }
          </div>
        </div>
        <div className="games-container-home">
          <label className="label-section-title-home">FAVORITOS</label>
          {(favorites?.length || 0) > 0 ? 
            <div className="games-home" style={{width:  (favorites?.length || 0) * 150}} onClick={handleNovoHistorico}>
            {favorites?.map((game) =>
              <GameImage key={game.id} id={game.jogo.id} nome={game.jogo.nome} image={game.jogo.image} url={game.jogo.image}/>
            )}
            </div> :
            <div className="games-home" style={{width: "100%", height: "10vh"}} onClick={handleNovoHistorico}>
              <label style={{margin: 20}}> O aluno não possui jogos favoritos</label>
            </div>  
          }
          <label className="label-section-title-home">JOGOS RECOMENDADOS</label>
          {(games?.length || 0) > 0 ? 
            <div className="games-home" style={{width: (games?.length || 0) * 150}} onClick={handleNovoHistorico}>
              {(games?.length || 0) > 0 && games?.map((game)=> (
                <GameImage key={game.id} id={game.id} nome={game.nome} image={game.image} url={game.url}/>
              ))} 
            </div> :
            <div className="games-home" style={{width: "100%", height: "10vh"}} onClick={handleNovoHistorico}>
              <label style={{margin: 20}}> Não foram encontrados jogos recomendados</label>
            </div>  
          }
        </div>
        <div className="footer-container-home">
          <div className="footer-inputs-home">
            <label> Selecione o nível dos jogos: </label>
            <select className="footer-selects-home" required defaultValue={vogal} onChange={(e) => setVogal(e.target.value)}>
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

          <div className="footer-content-home" onClick={() => setIsAllGamesModalVisible(true)}>MOSTRAR JOGOS</div>
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
                  <GameCard key={game.id} nome={game.jogo.nome} descricao={game.jogo.descricao} image={game.jogo.image} url={game.jogo.url} tempoMin={game.tempoMin} tempoSeg={game.tempoSeg} concluido={game.concluido}/>
              ) : <label style={{margin: 20}}> O aluno não possui histórico de jogos</label>}
            </div> 
          </div>
        </div>

      </div>
      {isAllGamesModalVisible ? <AllGamesModal /> : null}
      {isGameModalVisible ? <GameModal game={sessionStorage.getItem("jogo")} favorites={favorites} onClickPlay={() => setIsGameVisible(true)} onClose={() => setIsGameModalVisible(false)}/> : null}
      {isGameVisible ? <Game onClose={ () => setIsGameVisible(false)}/> : null}
    </div>
  );
}

export default Home;