import React, { useState } from "react";
import Card from "../components/person-card";
import "../styles/pages/students.css";
import { useNavigate } from "react-router-dom";
import { useStudentsData } from "../hooks/student/useStudentsData";

//pagina dos alunos
function Students() {
  const navigate = useNavigate();

  const professor = sessionStorage.getItem("professor");
  const {data: students} = useStudentsData(professor || "");
  const [isDeleteMode, setIsDeleteMode] = useState(false);
  const [isUpdateMode, setIsUpdateMode] = useState(false);
  
  return (
    <div className="background-students">
      <div className="background-left-students">
        <img src={require("../assets/Logo.png")} className="logo-image"/>
      </div>
      <div className="background-right-students">
        <div className="container-students">
          <div className="label-title-students">
            Alunos
          </div>
          <div className="content-students">
            {(students?.length || 0) > 0 ? 
              students?.map((student) =>
                <Card key={student.registro} id={student.registro} nome={student.nome} heroi={student.heroi} situation="Aluno" delete={isDeleteMode} update={isUpdateMode}/>
              ) : 
              <div className="label-students">Nenhum aluno cadastrado</div>
            }
            
          </div>
          <div className="container-buttons-students">
            {/* <input type="submit" value="Excluir" className="button" onClick={() => setIsDeleteMode(!isDeleteMode)}></input>
            <input type="submit" value="Alterar" className="button" onClick={() => setIsUpdateMode(!isUpdateMode)}></input> */}
            <input type="submit" value="Cadastrar" className="button" onClick={() => navigate("/addAluno")}></input>
          </div>  
        </div>
      </div>
    </div>
  );
}

export default Students;