import React, { useEffect, useState } from "react";
import Card from "../../components/card";
import api from "../../util/api";
import { teachersType } from "../../@types/types";
import "./style.css";

function Students() {
  const [students, setStudents] = useState<teachersType[]>([]);
  useEffect(() => {
    api.get("/professor")
      .then(res => setStudents(res.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="background">
      <div className="content">
        {students.map((student) =>
          <Card key={student.id} name={student.nome}/>
        )}

        <Card name="Novo Aluno"/>
      </div>

    </div>
  );
}

export default Students;