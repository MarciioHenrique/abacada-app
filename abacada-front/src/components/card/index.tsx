import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

function Card(props: {name: string}) {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/alunos");
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