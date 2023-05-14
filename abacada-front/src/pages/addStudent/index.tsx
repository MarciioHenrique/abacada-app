import React, { useContext, useState } from "react";
import { AuthContextType } from "../../@types/types";
import { useNavigate, useParams } from "react-router-dom";
import "./style.css";
import { AuthContext } from "../../contexts/auth";
import userServices from "../../services/userServices";

//pagina de cadastro de aluno
export default function AddStudent() {
  const professor = sessionStorage.getItem("professor");
  const navigate = useNavigate();

  const [nome, setNome] = useState("");
  const [heroi, setHeroi] = useState("");
  const [nivel, setNivel] = useState("");
  const [error, setError] = useState("");

  const handleAddStudent = () => {
    if (!nome || !heroi || !nivel) {
      setError("Preencha todos os campos");
      return;
    }

    userServices.getTeacher(professor)
      .then(res => {
        userServices.addStudent(nome, heroi, nivel, res)
          .then(res => navigate("/alunos"))
          .catch(error => setError(error));
      
      })
      .catch(error => setError(error));
  };

  const handleComeBack = () => {
    navigate("/alunos");
  };

  return (
    <div className="backgroundAddStudent">
      <div className="background-leftAddStudent">
        <img src={require("../../assets/Logo.png")} className="logoImage"/>
      </div>
      <div className="background-rightAddStudent">
        <div className="contentAddStudent">
          <label className="labelTitleAddStudent">Cadastro de Aluno</label>

          <label className="labelAddStudent">Nome</label>
          <input  type="text"
                  name="nome"
                  className="inputAddStudent"
                  placeholder="Digite o Registro"
                  onChange={(e: React.FormEvent) => [setNome((e.target as HTMLInputElement).value), setError("")]}
          ></input>

          <label className="labelAddStudent">Heroi</label>
          <input  type="text"
                  name="heroi"
                  className="inputAddStudent"
                  placeholder="Digite o Heroi"
                  onChange={(e: React.FormEvent) => [setHeroi((e.target as HTMLInputElement).value), setError("")]}
          ></input>

          <label className="labelAddStudent">Nivel</label>
          <input  type="text"
                  name="nivel"
                  className="inputAddStudent"
                  placeholder="Digite o Nivel"
                  onChange={(e: React.FormEvent) => [setNivel((e.target as HTMLInputElement).value), setError("")]}
          ></input>

          <label className="labelErrorAddStudent">{error}</label>
          <div className="buttonsContainerAddStudent">
            <input type="submit" value="Voltar" className="buttonVoltarAddStudent" onClick={handleComeBack}></input>
            <input type="submit" value="Cadastrar" className="buttonAddStudent" onClick={handleAddStudent}></input>
          </div>
        </div>
      </div>
    </div>
  );
}
