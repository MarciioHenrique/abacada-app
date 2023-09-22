import React, { useState } from "react";
import useAuth from "../hooks/auth/useAuth";
import { AuthContextType } from "../@types/types";
import { useNavigate } from "react-router-dom";
import "../styles/pages/signin.css";

//pagina de login
export default function Signin() {
  const { signin } = useAuth() as AuthContextType;
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      setError("Preencha todos os campos");
      return;
    }

    //passar para o react query 
    signin(email, password)
      .then((res) => {
        sessionStorage.setItem("instituicao", JSON.stringify(res));
        navigate("/professores");
      })
      .catch((error) => {
        setError(error);
      });
  };

  return (
    <div className="background-signin">
      <div className="background-left-signin">
        <img src={require("../assets/Logo.png")} className="logo-image"/>
      </div>
      <div className="background-right-signin">
        <div className="content-signin">
          <label className="label-title-signin">Login</label>

          <label className="label-signin">Email</label>
          <input  type="email"
                  name="email"
                  className="input-signin"
                  placeholder="Digite seu E-mail"
                  onChange={(e: React.FormEvent) => [setEmail((e.target as HTMLInputElement).value), setError("")]}
          ></input>

          <label className="label-signin">Senha</label>
          <input  type="password"
                  name="senha"
                  className="input-signin"
                  placeholder="Digite sua senha"
                  onChange={(e: React.FormEvent) => [setPassword((e.target as HTMLInputElement).value), setError("")]}
            ></input>

          <label className="label-error-signin">{error}</label>
          <input type="submit" value="Entrar" className="button-signin" onClick={handleLogin}></input>
        </div>

        {/* <div className="bottom-content-signin">
          <label className="bottom-label-signin">
            Não possui cadastro? <Link to="/signup" style={{textDecoration: "none"}}>Clique aqui</Link>
          </label>

        </div> */}
      </div>
    </div>
  );
}
