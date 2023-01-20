import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

//Componente Card vai pegar as informações do aluno/professor e mostrar na tela
function Card(props: {name: string, situation: string}) {
  const navigate = useNavigate();

  function handleClick() {
    if(props.situation == "Professor")
      navigate("/alunos/"+props.name);

    if(props.situation == "Aluno")
      navigate("/home");
  }

  return (
    <div>
      <div className="contentCard" onClick={handleClick}>
        <div className="imageContainerCard">
          <img src={require("../../assets/user1.png") }/>
        </div>
        <div className="nameCard">
          {props.name}
        </div>
      </div>
    </div>
  );
}

export default Card;