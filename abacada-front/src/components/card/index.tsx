import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

//Componente Card vai pegar as informações do aluno/professor e mostrar na tela
function Card(props: {registro: number, nome: string, situation: string}) {
  const navigate = useNavigate();

  function handleClick() {
    switch (props.situation) {
      case "Professor":
        navigate("/alunos/"+props.registro);
        break;
      case "Aluno":
        navigate("/home");
        break;
      case "AddProfessor":
        navigate("/addProfessor");
        break;
      case "AddAluno":
        navigate("/addAluno");
        break;
      default:
        break;
    }
  }

  return (
    <div>
      <div className="contentCard" onClick={handleClick}>
        <div className="imageContainerCard">
          <img src={require("../../assets/user1.png") }/>
        </div>
        <div className="nameCard">
          {props.nome}
        </div>
      </div>
    </div>
  );
}

export default Card;