import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/pages/new-student.css";
import { useTeacherData } from "../hooks/teacher/useTeacherData";
import { useHeroesData } from "../hooks/hero/useHeroesData";
import { useHeroData } from "../hooks/hero/useHeroData";
import { studentRequest } from "../@types/types";
import { useStudentMutate } from "../hooks/student/useStudentMutate";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//pagina de cadastro de aluno
export default function NewStudent() {
  const [nome, setNome] = useState("");
  const [heroi, setHeroi] = useState("");
  const [vogal, setVogal] = useState("");
  const [estagio, setEstagio] = useState("");
  const [error, setError] = useState("");

  const vogais = ["A", "E", "I", "O", "U"];
  const estagios = ["Sílaba", "Vogal", "Frase", "Texto"];

  const navigate = useNavigate();
  const teacherId = sessionStorage.getItem("professor");
  const { data: heroes } = useHeroesData();
  const { data: hero } = useHeroData(heroi);
  const { data: teacher } = useTeacherData(teacherId || "");
  const { mutate, isSuccess, isError } = useStudentMutate();

  const handleComeBack = () => {
    navigate("/alunos");
  };

  const handleNewStudent = () => {
    if ( !heroi || !vogal || !estagio) {
      setError("Preencha todos os campos");
      return;
    }

    const data: studentRequest = {
      nome: nome,
      heroi: hero,
      vogal: vogal,
      estagio: estagio,
      professor: teacher
    };

    mutate(data);
  };  

  useEffect(() => {
    if (isSuccess) {
      console.log("isSuccess: ", isSuccess);
      toast.success("Aluno(a) cadastrado(a) com sucesso!");
    }
  },[isSuccess]);

  useEffect(() => {
    if (isError) {
      toast.error("Aluno(a) não pôde ser cadastrado(a) com sucesso, tente novamente!");
    }
  },[isError]);

  return (
    <div className="background-new-student">
      <div className="background-left-new-student">
        <img src={require("../assets/Logo.png")} className="logo-image"/>
      </div>
      <div className="background-right-new-student">
        <div className="content-new-student">
          <label className="label-title-new-student">Cadastro de Aluno</label>

          <label className="label-new-student">Nome</label>
          <input  type="text"
                  name="nome"
                  className="input-new-student"
                  placeholder="Digite o Nome"
                  onChange={(e: React.FormEvent) => [setNome((e.target as HTMLInputElement).value), setError("")]}
          ></input>

          <label className="label-new-student">Heroi</label>
          <select className="input-new-student" required defaultValue="" onChange={(e) => setHeroi(e.target.value)}>
            <option value="" disabled>Selecione...</option>
            {heroes?.map((heroi) => 
              <option key={heroi.id} value={heroi.id}>{heroi.nome}</option>
            )}
          </select>

          <label className="label-new-student">Vogal</label>
          <select className="input-new-student" required defaultValue="" onChange={(e) => setVogal(e.target.value)}>
            <option value="" disabled>Selecione...</option>
            {vogais.map((vogal) => 
              <option key={vogal} value={vogal}>{vogal}</option>
            )}
          </select>

          <label className="label-new-student">Estagio</label>
          <select className="input-new-student" required defaultValue="" onChange={(e) => setEstagio(e.target.value)}>
            <option value="" disabled>Selecione...</option>
            {estagios.map((estagio) => 
              <option key={estagio} value={estagio}>{estagio}</option>
            )}
          </select>

          <label className="label-error-new-student">{error}</label>
          <div className="buttons-container-new-student">
            <input type="submit" value="Voltar" className="button-go-back-new-student" onClick={handleComeBack}></input>
            <input type="submit" value="Cadastrar" className="button-new-student" onClick={handleNewStudent}></input>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
