import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/pages/new-teacher.css";
import { useTeacherMutate } from "../hooks/teacher/useTeacherMutate";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//pagina de cadastro de professor
export default function NewTeacher() {
  // const { user } = useContext(AuthContext) as AuthContextType;
  const instituicao = JSON.parse(sessionStorage.getItem("instituicao") || "");
  const navigate = useNavigate();
  const { mutate, isSuccess, isError } = useTeacherMutate();

  const [email, setEmail] = useState("");
  const [nome, setNome] = useState("");
  const [error, setError] = useState("");

  const handleComeBack = () => {
    navigate("/professores");
  };

  const handleNewTeacher = () => {
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
    <div className="background-new-teacher">
      <div className="background-left-new-teacher">
        <img src={require("../assets/Logo.png")} className="logoImage"/>
      </div>
      <div className="background-right-new-teacher">
        <div className="content-new-teacher">
          <label className="label-title-new-teacher">Cadastro de Professor</label>

          <label className="label-new-teacher">Nome</label>
          <input  type="text"
                  name="nome"
                  className="input-new-teacher"
                  placeholder="Digite o Nome"
                  onChange={(e: React.FormEvent) => [setNome((e.target as HTMLInputElement).value), setError("")]}
          ></input>

          <label className="label-new-teacher">Email</label>
          <input  type="email"
                  name="email"
                  className="input-new-teacher"
                  placeholder="Digite o Email"
                  onChange={(e: React.FormEvent) => [setEmail((e.target as HTMLInputElement).value), setError("")]}
          ></input>

          <label className="label-error-new-teacher">{error}</label>
          <div className="buttons-container-new-teacher">
            <input type="submit" value="Voltar" className="button-go-back-new-teacher" onClick={handleComeBack}></input>
            <input type="submit" value="Cadastrar" className="button-new-teacher" onClick={handleNewTeacher}></input>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
