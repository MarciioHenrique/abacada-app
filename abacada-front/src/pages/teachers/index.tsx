import React, { useEffect, useState } from "react";
import Card from "../../components/card";
import api from "../../util/api";
import { teachersType } from "../../@types/types";
import "./style.css";

//pagina dos professores
function Teachers() {
  const [teachers, setTeachers] = useState<teachersType[]>([]);
  useEffect(() => {
    api.get("/professor")
      .then(res =>{setTeachers(res.data); console.log(res);})
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="backgroundTeachers">
      <div className="background-leftTeachers">
        <img src={require("../../assets/Logo.png")}/>
      </div>
      <div className="background-rightTeachers">
        <div className="contentTeachers">
          {teachers.map((teacher) =>
            <Card key={teacher.id} name={teacher.nome} situation="Professor"/>
          )}

          <Card name="Novo Professor" situation=""/>
        </div>
      </div>

    </div>
  );
}

export default Teachers;