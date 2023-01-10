import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

function Card(props: {name: string, situation: string}) {
  const navigate = useNavigate();

  function handleClick() {
    if(props.situation == "Professor")
      navigate("/alunos/"+props.name);

    if(props.situation == "Aluno")
      navigate("/home");
  }

  return (
    <div className="card">
      <div className="cardContent" onClick={handleClick}>
        <div className="imageContainer">
          <img src={require("../../assets/user1.png") }/>
        </div>
        <div className="name">
          {props.name}
        </div>
      </div>
    </div>
  );
}

export default Card;