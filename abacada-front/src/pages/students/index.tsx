import React, { useEffect, useState } from "react";
import Card from "../../components/card";
import api from "../../util/api";
import { studentsType } from "../../@types/types";
import "./style.css";
import { useParams } from "react-router-dom";

//pagina dos alunos
function Students() {
  const { professor } = useParams();
  const [students, setStudents] = useState<studentsType[]>([]);

  useEffect(() => {
    api.get("/aluno?professor="+professor)
      .then(res => setStudents(res.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="backgroundStudents">
      <div className="contentStudents">
        {students.map((student) =>
          <Card key={student.id} name={student.nome} situation="Aluno"/>
        )}

        <Card name="Novo Aluno" situation=""/>
      </div>

    </div>
  );
}

export default Students;