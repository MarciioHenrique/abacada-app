import React, { useContext, useState } from "react";
import { AuthContextType } from "../../@types/types";
import { useNavigate, useParams } from "react-router-dom";
import "./style.css";
import { AuthContext } from "../../contexts/auth";
import userServices from "../../services/userServices";

//pagina de cadastro de aluno
export default function AddStudent() {
  const { professor } = useParams();
  const navigate = useNavigate();

  const [registro, setRegistro] = useState("");
  const [nome, setNome] = useState("");
  const [error, setError] = useState("");

  const handleAddStudent = () => {
    if (!registro || !nome) {
      setError("Preencha todos os campos");
      return;
    }

    userServices.getTeacher(professor)
      .then(res => {
        userServices.addStudent(registro, nome, res)
          .then(res => navigate("/alunos/"+professor))
          .catch(error => setError(error));
      
      })
      .catch(error => setError(error));
  };

  const handleComeBack = () => {
    navigate("/alunos/"+professor);
  };

  return (
    <div className="backgroundAddStudent">
      <div className="background-leftAddStudent">
        <img src={require("../../assets/Logo.png")} className="logoImage"/>
      </div>
      <div className="background-rightAddStudent">
        <div className="contentAddStudent">
          <label className="labelTitleAddStudent">Cadastro de Aluno</label>

          <label className="labelAddStudent">Registro</label>
          <input  type="number"
                  name="registro"
                  className="inputAddStudent"
                  placeholder="Digite o Registro"
                  onChange={(e: React.FormEvent) => [setRegistro((e.target as HTMLInputElement).value), setError("")]}
          ></input>

          <label className="labelAddStudent">Nome</label>
          <input  type="text"
                  name="nome"
                  className="inputAddStudent"
                  placeholder="Digite o Nome"
                  onChange={(e: React.FormEvent) => [setNome((e.target as HTMLInputElement).value), setError("")]}
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
