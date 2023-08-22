import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import { useTeacherData } from "../../hooks/teacher/useTeacherData";
import { useHeroesData } from "../../hooks/hero/useHeroesData";
import { useHeroData } from "../../hooks/hero/useHeroData";
import { studentRequest } from "../../@types/types";
import { useStudentMutate } from "../../hooks/student/useStudentMutate";
import SuccessModal from "../../components/successModal/Index";
import ErrorModal from "../../components/errorModal/Index";

//pagina de cadastro de aluno
export default function AddStudent() {
  const [nome, setNome] = useState("");
  const [heroi, setHeroi] = useState("");
  const [vogal, setVogal] = useState("");
  const [estagio, setEstagio] = useState("");
  const [error, setError] = useState("");

  const vogais = ["A", "E", "I", "O", "U"];
  const estagios = ["1", "2", "3", "4"];

  const navigate = useNavigate();
  const teacherId = sessionStorage.getItem("professor");
  const { data: heroes } = useHeroesData();
  const { data: hero } = useHeroData(heroi);
  const { data: teacher } = useTeacherData(teacherId || "");
  const { mutate, isSuccess, isError } = useStudentMutate();
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);

  let msgSuccess = "";
  let msgError = "";

  const handleComeBack = () => {
    navigate("/alunos");
  };

  const handleErrorModalOK = () => {
    setIsErrorModalOpen(false);
  };

  const handleSuccessModalOK = () => {
    setIsSuccessModalOpen(false);
    handleComeBack();
  };

  const handleAddStudent = () => {
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
    msgSuccess = `O(a) aluno(a) ${nome} foi cadastrado(a) com sucesso`;
    console.log(msgSuccess);
    msgError = `O(a) aluno(a) ${nome} não pode ser cadastrado(a) com sucesso`;
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
                  placeholder="Digite o Nome"
                  onChange={(e: React.FormEvent) => [setNome((e.target as HTMLInputElement).value), setError("")]}
          ></input>

          <label className="labelAddStudent">Heroi</label>
          <select className="inputAddStudent" required defaultValue="" onChange={(e) => setHeroi(e.target.value)}>
            <option value="" disabled>Selecione...</option>
            {heroes?.map((heroi) => 
              <option key={heroi.id} value={heroi.id}>{heroi.nome}</option>
            )}
          </select>

          <label className="labelAddStudent">Vogal</label>
          <select className="inputAddStudent" required defaultValue="" onChange={(e) => setVogal(e.target.value)}>
            <option value="" disabled>Selecione...</option>
            {vogais.map((vogal) => 
              <option key={vogal} value={vogal}>{vogal}</option>
            )}
          </select>

          <label className="labelAddStudent">Estagio</label>
          <select className="inputAddStudent" required defaultValue="" onChange={(e) => setEstagio(e.target.value)}>
            <option value="" disabled>Selecione...</option>
            {estagios.map((estagio) => 
              <option key={estagio} value={estagio}>{estagio}</option>
            )}
          </select>

          <label className="labelErrorAddStudent">{error}</label>
          <div className="buttonsContainerAddStudent">
            <input type="submit" value="Voltar" className="buttonVoltarAddStudent" onClick={handleComeBack}></input>
            <input type="submit" value="Cadastrar" className="buttonAddStudent" onClick={handleAddStudent}></input>
          </div>
        </div>
        {
          isSuccess && 
            <SuccessModal
              isOpen={isSuccessModalOpen}
              title="Confirmação de Cadastro"
              message="O(A) aluno(a) foi cadastrado(a) com sucesso"
              onOK={handleSuccessModalOK}
            />
        }
        {
          isError &&
            <ErrorModal
              isOpen={isErrorModalOpen}
              title="Erro"
              message="Não foi possível cadastrar o(a) aluno(a)"
              onOK={handleErrorModalOK}
            />
        }
      </div>
    </div>
  );
}
