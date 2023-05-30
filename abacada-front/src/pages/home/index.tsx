import React, { useEffect, useState } from "react";
import GameCard from "../../components/gameCard";
import Game from "../../components/game";
import "./style.css";
import useAuth from "../../hooks/useAuth";
import { AuthContextType, studentsType, favoritoType, historicoType } from "../../@types/types";
import { useNavigate } from "react-router-dom";
import { jogoType } from "../../@types/types";
import userServices from "../../services/userServices";
import { CgProfile } from "react-icons/cg";
import { BsGear } from "react-icons/bs";
import { BiExit } from "react-icons/bi";
import { AiOutlineUserSwitch } from "react-icons/ai";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import GameImage from "../../components/gameImage";

//pagina home
function Home() {
  
  const registroAluno = sessionStorage.getItem("aluno");
  const navigate = useNavigate();
  const { signout } = useAuth() as AuthContextType;
  const [aluno, setAluno] = useState<studentsType>();
  const [games, setGames] = useState<jogoType[]>([]);
  const [favoritos, setFavoritos] = useState<favoritoType[]>([]);
  const [historico, setHistorico] = useState<historicoType[]>([]);
  const [error, setError] = useState("");
  const [isGameVisible, setIsGameVisible] = useState(false);
  const [scrollX, setScrollX] = useState(0);

  function handleMoveLeft() {
    let x = scrollX + 150;
    if (x > 0) {
      x = 0;
    }
    setScrollX(x);
    setIsGameVisible(false);
  }

  const handleMoveRight = () => {
    let x = scrollX - 150;
    if(x < -1*(games.length * 150)/2) {
      x = -1*(games.length * 150)/2;
    }
    setScrollX(x);
    console.log("largura max: "+ -1*(games.length * 150)/2);
    console.log("x atual: "+ x);
  };

  const handleNovoHistorico = () => {
    userServices.getJogo(sessionStorage.getItem("jogo"))
      .then(jogo => {
        userServices.addHistorico(aluno, jogo)
          .then(res => {
            sessionStorage.setItem("historico", res.id);
            setIsGameVisible(true);
          })
          .catch(error => console.log(error));
      })
      .catch(error => console.log(error));
  };

  useEffect(() => {
    userServices.getAluno(registroAluno)
      .then(res => setAluno(res))
      .catch(error => setError(error));

    userServices.getJogos()
      .then(res => setGames(res))
      .catch(error => setError(error));

    userServices.getFavorito(registroAluno)
      .then(res => setFavoritos(res))
      .catch(error => setError(error));

    userServices.getHistorico(registroAluno)
      .then(res => setHistorico(res))
      .catch(error => setError(error));
  }, []);

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

  return (
    <div className="fundo">
      <div className="tela">
        <div className="headerContainer">
          <div className="form">ABACADA
            <img src={require("../../assets/banners/Homem-Aranha.png")}/>
          </div>
        </div>
        <div className="gamesContainer">
          <label className="title">FAVORITOS</label>
          {favoritos.length > 0 ? 
            <div className="games" style={{width: favoritos.length * 150}} onClick={handleNovoHistorico}>
            {favoritos.map((game) =>
              <GameImage key={game.id} id={game.jogo.id} nome={game.jogo.nome} image={game.jogo.image} url={game.jogo.image}/>
            )}
            </div> :
            <div className="games" style={{width: "100%", height: "10vh"}} onClick={handleNovoHistorico}>
              <label style={{margin: 20}}> O aluno não possui jogos favoritos</label>
            </div>  
          }
          
          <label className="title">JOGOS RECOMENDADOS</label>
          <div className="games" style={{marginLeft: scrollX ,width: games.length * 150}} onClick={handleNovoHistorico}>
            <div className="navigateBefore" onClick={handleMoveLeft}>
              <MdNavigateBefore/>
            </div>
            <div className="navigateNext" onClick={handleMoveRight}>
              <MdNavigateNext/>
            </div>
            {games.map((game) =>
              <GameImage key={game.id} id={game.id} nome={game.nome} image={game.image} url={game.url}/>
            )}
          </div>
        </div>
        <div className="footerContainer">
          <div className="footerContent">MOSTRAR JOGOS</div>
        </div>
      </div>
      <div className="barraLateralDireita">
        <div className="buttonsContainer">
          <div className="buttonBox" onClick={() => alert("clicou")}>
            <CgProfile className="imagesHome"/>
            <label className="imagesDescription">Perfil</label>
          </div>
          <div className="buttonBox" onClick={trocarAluno}>
            <AiOutlineUserSwitch className="imagesHome" />
            <label className="imagesDescription">Trocar Aluno</label>
          </div>
          <div className="buttonBox" onClick={() => alert("clicou")}>
            <BsGear className="imagesHome"/>
            <label className="imagesDescription">Config</label>
          </div>
          <div className="buttonBox" onClick={exit}>
            <BiExit className="imagesHome"/>
            <label className="imagesDescription">Sair</label>
          </div>
        </div>
        <div className="historicoContainer">
          <div className="historico">
            <label className="historicoTitle">HISTÓRICO</label>
            <div className="historicoList">
              {historico.length > 0 ? historico.map((game) =>
                  <GameCard key={game.id} nome={game.jogo.nome} descricao={game.jogo.descricao} image={game.jogo.image} url={game.jogo.url} tempoMin={game.tempoMin} tempoSeg={game.tempoSeg} concluido={game.concluido}/>
              ) : <label style={{margin: 20}}> O aluno não possui histórico de jogos</label>}
            </div> 
          </div>
        </div>

      </div>
      {isGameVisible ? <Game onClose={ () => setIsGameVisible(false)}/> : null}
    </div>
  );
}

export default Home;