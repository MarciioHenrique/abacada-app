import React from "react";
import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import useAuth from "../hooks/auth/useAuth";
import { AuthContextType } from "../@types/types";
import Home from "../pages/home";
import Signin from "../pages/signin";
import Signup from "../pages/signup";
import Teachers from "../pages/teachers";
import Students from "../pages/students";
import AddTeacher from "../pages/new-teacher";
import AddStudent from "../pages/new-student";

//cria todas as rotas da aplicação
function RoutesApp() {
  const { signed } = useAuth() as AuthContextType;

  const Private = ({Item}: any) => {
    const Signed = true;
    return Signed ? <Item /> : <Signin />;
  };

  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route path="/home" element={<Private Item={Home} />} />
          <Route path="/teachers" element={<Private Item={Teachers} />} />
          <Route path="/alunos" element={<Private Item={Students} />} />
          <Route path="/addProfessor" element={<Private Item={AddTeacher} />} />
          <Route path="/addAluno" element={<Private Item={AddStudent} />} />
          <Route path="/" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<Signin />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
}

export default RoutesApp;