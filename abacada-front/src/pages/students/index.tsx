import React, { useEffect, useState } from "react";
import Card from "../../components/card";
import { studentsType } from "../../@types/types";
import "./style.css";
import { useNavigate, unstable_HistoryRouter } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";
import userServices from "../../services/userServices";

//pagina dos alunos
function Students() {
  const navigate = useNavigate();

  const professor = sessionStorage.getItem("professor");
  const [students, setStudents] = useState<studentsType[]>([]);
  const [error, setError] = useState("");
  const [isDeleteMode, setIsDeleteMode] = useState(false);
  const [isUpdateMode, setIsUpdateMode] = useState(false);

  useEffect(() => {
    userServices.getStudents(professor)
      .then(res => setStudents(res))
      .catch(error => setError(error));
  }, [isDeleteMode, isUpdateMode]);

  return (
    <div className="backgroundStudents">
      <div className="background-leftStudents">
        
        <img src={require("../../assets/Logo.png")} className="logoImage"/>
      </div>
      <div className="background-rightStudents">
        <div className="containerStudents">
          <div className="labelTitleStudents">
            <label>Alunos</label>
          </div>
          <div className="contentStudents">
            {students.map((student) =>
              <Card key={student.registro} id={student.registro} nome={student.nome} heroi={student.heroi} situation="Aluno" delete={isDeleteMode} update={isUpdateMode}/>
            )}
          </div>
          <div className="containerButtons">
            <input type="submit" value="Excluir" className="button" onClick={() => setIsDeleteMode(!isDeleteMode)}></input>
            <input type="submit" value="Alterar" className="button" onClick={() => setIsUpdateMode(!isUpdateMode)}></input>
            <input type="submit" value="Cadastrar" className="button" onClick={() => navigate("/addAluno")}></input>
          </div>  
        </div>
      </div>


    </div>
  );
}

export default Students;