import React, { useEffect, useState } from "react";
import Card from "../../components/card";
import api from "../../util/api";
import { studentsType } from "../../@types/types";
import "./style.css";
import { useParams } from "react-router-dom";
import userServices from "../../services/userServices";

//pagina dos alunos
function Students() {
  const { professor } = useParams();
  const [students, setStudents] = useState<studentsType[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    userServices.getStudents(professor)
      .then(res => setStudents(res))
      .catch(error => setError(error));
  }, []);

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
              <Card key={student.registro} registro={student.registro} nome={student.nome} situation="Aluno"/>
            )}

            <Card registro={0} nome="Novo Aluno" situation=""/>
          </div>
        </div>
      </div>


    </div>
  );
}

export default Students;