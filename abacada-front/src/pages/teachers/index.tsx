import React, { useEffect, useState } from "react";
import Card from "../../components/card";
import api from "../../util/api";
import { teachersType } from "../../@types/types";
import "./style.css";

function Teachers() {
  const [teachers, setTeachers] = useState<teachersType[]>([]);
  useEffect(() => {
    api.get("/professor")
      .then(res =>{setTeachers(res.data); console.log(res);})
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="background">
      <div className="content">
        {teachers.map((teacher) =>
          <Card key={teacher.id} name={teacher.nome} situation="Professor"/>
        )}

        <Card name="Novo Professor" situation=""/>
      </div>

    </div>
  );
}

export default Teachers;