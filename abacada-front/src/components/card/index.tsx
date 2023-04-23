import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import { RxUpdate } from "react-icons/rx";
import { AiOutlineDelete } from "react-icons/ai";
import userServices from "../../services/userServices";

//Componente Card vai pegar as informações do aluno/professor e mostrar na tela
function Card(props: {registro: number, nome: string, situation: string, delete: boolean, update: boolean}) {
  const navigate = useNavigate();

 

  function handleClick() {
    if(props.delete || props.update) 
      return;
    
    switch (props.situation) {
      case "Professor":
        navigate("/alunos/"+props.registro);
        break;
      case "Aluno":
        navigate("/home");
        break;
      case "AddAluno":
        navigate("/addAluno/"+props.registro);
        break;
      default:
        break;
    }
  }

  function handleClickDelete() {
    userServices.deleteTeacher(props.registro)
      .then(res => location.reload())
      .catch(error => alert(error));
  }

  function handleClickUpdate() {
    return alert("update "+props.update);
  }

  return (
    <div>
      <div className="contentCard" onClick={handleClick}>
        <div className="optionsCard">
          {props.update ? <RxUpdate className="updateMode" onClick={handleClickUpdate} style={{visibility: "visible"}}/> : <RxUpdate className="updateMode" onClick={handleClickUpdate} style={{visibility: "hidden"}}/>}
          {props.delete ? <AiOutlineDelete className="deleteMode" onClick={handleClickDelete} style={{visibility: "visible"}}/> : <AiOutlineDelete className="deleteMode" onClick={handleClickDelete} style={{visibility: "hidden"}}/>}
        </div>
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