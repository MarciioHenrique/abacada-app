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

  const [registro, setRegistro] = useState("");
  const [nome, setNome] = useState("");
  const [error, setError] = useState("");

  const handleAddTeacher = () => {
    if (!registro || !nome) {
      setError("Preencha todos os campos");
      return;
    }

    userServices.addTeacher(registro, nome, user)
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

          <label className="labelAddTeacher">Registro</label>
          <input  type="number"
                  name="registro"
                  className="inputAddTeacher"
                  placeholder="Digite o Registro"
                  onChange={(e: React.FormEvent) => [setRegistro((e.target as HTMLInputElement).value), setError("")]}
          ></input>

          <label className="labelAddTeacher">Nome</label>
          <input  type="text"
                  name="nome"
                  className="inputAddTeacher"
                  placeholder="Digite o Nome"
                  onChange={(e: React.FormEvent) => [setNome((e.target as HTMLInputElement).value), setError("")]}
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
