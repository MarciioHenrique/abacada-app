import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/components/person-card.css";
import { heroType } from "../@types/types";
import { BiPencil } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";
import userServices from "../services/userServices";

//Componente Card vai pegar as informações do aluno/professor e mostrar na tela
function PersonCard(props: {id: string, nome: string, heroi: heroType | undefined , situation: string, delete: boolean, update: boolean}) {
  const navigate = useNavigate();
  const [isConfirmationPopUpVisible, setIsConfirmationPorpUpVisible] = useState(false);


  function handleClick() {
    if(props.delete || props.update) 
      return;
    
    switch (props.situation) {
      case "Professor":
        sessionStorage.setItem("professor", props.id);
        navigate("/alunos");
        break;
      case "Aluno":
        sessionStorage.setItem("aluno", props.id);
        navigate("/home");
        break;
      default:
        break;
    }
  }

  function handleClickDelete() {
    if (props.situation == "Professor") {
      userServices.deleteTeacher(props.id)
      .then(res => location.reload())
      .catch(error => alert(error));
    }
    else if (props.situation == "Aluno") {
      userServices.deleteStudent(props.id)
      .then(res => location.reload())
      .catch(error => alert(error));
    }
    else {
      alert("ERRO");
    }
  }

  function handleClickUpdate() {
    return alert("update "+props.update);
  }

  return (
    <div>
      <div className="contentCard" onClick={handleClick}>
        <div className="optionsCard">
          {props.update ? <BiPencil className="updateMode" onClick={handleClickUpdate} style={{visibility: "visible"}}/> : <BiPencil className="updateMode" onClick={handleClickUpdate} style={{visibility: "hidden"}}/>}
          {props.delete ? <AiOutlineDelete className="deleteMode" onClick={handleClickDelete} style={{visibility: "visible"}}/> : <AiOutlineDelete className="deleteMode" onClick={handleClickDelete} style={{visibility: "hidden"}}/>}
        </div>
        <div className="imageContainerCard">
          {props.situation == "Professor" ? <img src={require("../assets/user1.png") }/> : <img src={require(`../assets/icons/${props.heroi?.icone}`)}/>}
        </div>
        <div className="nameCard">
          {props.nome}
        </div>
      </div>
    
    </div>
  );
}

export default PersonCard;