import React, { useEffect, useState, useContext } from "react";
import Card from "../../components/card";
import userServices from "../../services/userServices";
import useAuth from "../../hooks/useAuth";
import { AuthContext } from "../../contexts/auth";
import { AuthContextType, teachersType } from "../../@types/types";
import "./style.css";

//pagina dos professores
function Teachers() {
  const { user } = useContext(AuthContext) as AuthContextType;
  const [teachers, setTeachers] = useState<teachersType[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    userServices.getTeachers(user.instituicao)
      .then(res => setTeachers(res))
      .catch(error => setError(error));
  }, []);

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
              <Card key={teacher.registro} name={teacher.nome} situation="Professor"/>
            )}
            
            <Card name="Novo Professor" situation=""/>
          </div>
          
        </div>
      </div>

    </div>
  );
}

export default Teachers;