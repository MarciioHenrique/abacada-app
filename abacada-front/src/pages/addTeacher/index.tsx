import React, { useContext, useState } from "react";
import { AuthContextType } from "../../@types/types";
import { useNavigate } from "react-router-dom";
import "./style.css";
import { AuthContext } from "../../contexts/auth";
import userServices from "../../services/userServices";

//pagina de cadastro de professor
export default function AddTeacher() {
  const { user } = useContext(AuthContext) as AuthContextType;
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [nome, setNome] = useState("");
  const [error, setError] = useState("");

  const handleAddTeacher = () => {
    if (!nome || !email) {
      setError("Preencha todos os campos");
      return;
    }

    userServices.addTeacher(nome, email, user)
      .then(res => navigate("/teachers"))
      .catch(error => setError(error));
    
  };

  const handleComeBack = () => {
    navigate("/teachers");
  };

  return (
    <div className="backgroundAddTeacher">
      <div className="background-leftAddTeacher">
        <img src={require("../../assets/Logo.png")} className="logoImage"/>
      </div>
      <div className="background-rightAddTeacher">
        <div className="contentAddTeacher">
          <label className="labelTitleAddTeacher">Cadastro de Professor</label>

          <label className="labelAddTeacher">Nome</label>
          <input  type="text"
                  name="nome"
                  className="inputAddTeacher"
                  placeholder="Digite o Nome"
                  onChange={(e: React.FormEvent) => [setNome((e.target as HTMLInputElement).value), setError("")]}
          ></input>

          <label className="labelAddTeacher">Email</label>
          <input  type="email"
                  name="email"
                  className="inputAddTeacher"
                  placeholder="Digite o Email"
                  onChange={(e: React.FormEvent) => [setEmail((e.target as HTMLInputElement).value), setError("")]}
          ></input>

          <label className="labelErrorAddTeacher">{error}</label>
          <div className="buttonsContainerAddTeacher">
            <input type="submit" value="Voltar" className="buttonVoltarAddTeacher" onClick={handleComeBack}></input>
            <input type="submit" value="Cadastrar" className="buttonAddTeacher" onClick={handleAddTeacher}></input>
          </div>
        </div>
      </div>
    </div>
  );
}
