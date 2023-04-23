import React, { useEffect, useState, useContext } from "react";
import Card from "../../components/card";
import userServices from "../../services/userServices";
import { AuthContext } from "../../contexts/auth";
import { AuthContextType, teachersType, usersType } from "../../@types/types";
import "./style.css";
import { useNavigate } from "react-router-dom";

//pagina dos professores
function Teachers() {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext) as AuthContextType;
  const [teachers, setTeachers] = useState<teachersType[]>([]);
  const [error, setError] = useState("");
  const [isDeleteMode, setIsDeleteMode] = useState(false);
  const [isUpdateMode, setIsUpdateMode] = useState(false);

  useEffect(() => {
    const instituicao: usersType = JSON.parse(sessionStorage.getItem("instituicao") || "{}");
    userServices.getTeachers(instituicao.instituicao)
      .then(res => setTeachers(res))
      .catch(error => setError(error));
  }, [isDeleteMode, isUpdateMode]);

  return (
    <div className="backgroundTeachers">
      <div className="background-leftTeachers">
        <img src={require("../../assets/Logo.png")} className="logoImage"/>
      </div>
      <div className="background-rightTeachers">
        <div className="containerTeachers">
          <div className="labelTitleTeacher">
            <label>Professores</label>
          </div>
          <div className="contentTeachers">
            {teachers.map((teacher) =>
              <Card key={teacher.registro} registro={teacher.registro} nome={teacher.nome} situation="Professor" delete={isDeleteMode} update={isUpdateMode}/>
            )}
          </div> 
          <div className="containerButtons">
            <input type="submit" value="Excluir" className="button" onClick={() => setIsDeleteMode(!isDeleteMode)}></input>
            <input type="submit" value="Alterar" className="button" onClick={() => setIsUpdateMode(!isUpdateMode)}></input>
            <input type="submit" value="Cadastrar" className="button" onClick={() => navigate("/addProfessor")}></input>
          </div>      
        </div> 
      </div>
    </div>
  );
}

export default Teachers;