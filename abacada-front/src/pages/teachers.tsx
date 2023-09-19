import React, { useEffect, useState, useContext } from "react";
import Card from "../components/person-card";
import userServices from "../services/userServices";
import { AuthContext } from "../contexts/auth";
import { AuthContextType, teacherType, usersType } from "../@types/types";
import "../styles/pages/teachers.css";
import { useNavigate } from "react-router-dom";
import { useTeachersData } from "../hooks/teacher/useTeachersData";

//pagina dos professores
function Teachers() {
  const navigate = useNavigate();
  const instituicao: usersType = JSON.parse(sessionStorage.getItem("instituicao") || "{}");
  const {data: teachers} = useTeachersData(instituicao.instituicao);
  const [isDeleteMode, setIsDeleteMode] = useState(false);
  const [isUpdateMode, setIsUpdateMode] = useState(false);

  return (
    <div className="backgroundTeachers">
      <div className="background-leftTeachers">
        <img src={require("../assets/Logo.png")} className="logoImage"/>
      </div>
      <div className="background-rightTeachers">
        <div className="containerTeachers">
          <div className="labelTitleTeacher">
            Professores
          </div>
          <div className="contentTeachers">
            {teachers?.map((teacher) =>
              <Card key={teacher.registro} id={teacher.registro} nome={teacher.nome} heroi={undefined} situation="Professor" delete={isDeleteMode} update={isUpdateMode}/>
            )}
          </div> 
          <div className="containerButtons">
            {/* <input type="submit" value="Excluir" className="button" onClick={() => setIsDeleteMode(!isDeleteMode)}></input>
            <input type="submit" value="Alterar" className="button" onClick={() => setIsUpdateMode(!isUpdateMode)}></input> */}
            <input type="submit" value="Cadastrar" className="button" onClick={() => {console.log("Clicou");navigate("/addProfessor");}}></input>
          </div>      
        </div> 
      </div>
    </div>
  );
}

export default Teachers;