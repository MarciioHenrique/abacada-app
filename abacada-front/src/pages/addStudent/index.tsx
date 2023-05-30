import React, { useContext, useEffect, useState } from "react";
import { teachersType ,heroiType } from "../../@types/types";
import { useNavigate, useParams } from "react-router-dom";
import "./style.css";
import { AuthContext } from "../../contexts/auth";
import userServices from "../../services/userServices";

//pagina de cadastro de aluno
export default function AddStudent() {
  const professorID = sessionStorage.getItem("professor");
  const navigate = useNavigate();
  const [heroisList, setHeroisList] = useState<heroiType[]>([]);

  const [nome, setNome] = useState("");
  const [professor, setProfessor] = useState<teachersType>();
  const [heroi, setHeroi] = useState("");
  const [nivel, setNivel] = useState("");
  const [error, setError] = useState("");

  const handleAddStudent = () => {
    if (!nome || !heroi || !nivel) {
      setError("Preencha todos os campos");
      return;
    }

    userServices.getHeroi(heroi)
      .then(res => {
        userServices.addStudent(nome, res, nivel, professor)
          .then(res => navigate("/alunos"))
          .catch(error => setError(error));
      
      })
      .catch(error => setError(error));
  };

  const handleComeBack = () => {
    navigate("/alunos");
  };

  useEffect(() => {
    userServices.getHerois()
      .then(res => setHeroisList(res))
      .catch(error => setError(error));

    userServices.getTeacher(professorID)
      .then(res => setProfessor(res))
      .catch(error => setError(error));
  },[]);

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
                  placeholder="Digite o Nome"
                  onChange={(e: React.FormEvent) => [setNome((e.target as HTMLInputElement).value), setError("")]}
          ></input>

          <label className="labelAddStudent">Heroi</label>
          <select className="inputAddStudent" placeholder="Selecione o Herói" onChange={(e) => setHeroi(e.target.value)}>
            {heroisList.map((heroi) => 
              <option key={heroi.id} value={heroi.id}>{heroi.nome}</option>
            )}
          </select>

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
