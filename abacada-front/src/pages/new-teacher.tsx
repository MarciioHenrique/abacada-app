import React, { useContext, useEffect, useState } from "react";
import { AuthContextType, teacherType } from "../@types/types";
import { useNavigate } from "react-router-dom";
import "../styles/pages/new-teacher.css";
import { AuthContext } from "../contexts/auth";
import userServices from "../services/userServices";
import { useTeacherMutate } from "../hooks/teacher/useTeacherMutate";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//pagina de cadastro de professor
export default function AddTeacher() {
  // const { user } = useContext(AuthContext) as AuthContextType;
  const instituicao = JSON.parse(sessionStorage.getItem("instituicao") || "");
  const navigate = useNavigate();
  const { mutate, isSuccess, isError } = useTeacherMutate();

  const [email, setEmail] = useState("");
  const [nome, setNome] = useState("");
  const [error, setError] = useState("");

  const handleComeBack = () => {
    navigate("/teachers");
  };

  const handleAddTeacher = () => {
    if (!nome || !email) {
      setError("Preencha todos os campos");
      return;
    }

    const data = {
      nome: nome,
      email: email,
      instituicao: instituicao
    };

    mutate(data);
  };

  useEffect(() => {
    if (isSuccess) {
      console.log("isSuccess: ", isSuccess);
      toast.success("Professor(a) cadastrado(a) com sucesso!");
    }
  },[isSuccess]);

  useEffect(() => {
    if (isError) {
      toast.error("Professor(a) não pôde ser cadastrado(a) com sucesso, tente novamente!");
    }
  },[isError]);

  return (
    <div className="backgroundAddTeacher">
      <div className="background-leftAddTeacher">
        <img src={require("../assets/Logo.png")} className="logoImage"/>
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
      <ToastContainer />
    </div>
  );
}
