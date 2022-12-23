import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { AuthContextType } from "../../@types/types";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";

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

    const res: any = signin(email, password);

    if (res == "") {
      navigate("/home");
    }
    else {
      setError(res);
    }
  };

  return (
    <div className="background">
      <div className="background-left">
        <img src={require("../../assets/Logo.png")}/>
      </div>
      <div className="background-right">
        <div className="content">
          <label className="labelTitle">Login</label>

          <label className="label">Email</label>
          <input  type="email"
                  name="email"
                  className="input"
                  placeholder="Digite seu E-mail"
                  onChange={(e: React.FormEvent) => [setEmail((e.target as HTMLInputElement).value), setError("")]}
          ></input>

          <label className="label">Senha</label>
          <input  type="password"
                  name="senha"
                  className="input"
                  placeholder="Digite sua senha"
                  onChange={(e: React.FormEvent) => [setPassword((e.target as HTMLInputElement).value), setError("")]}
            ></input>

          <label className="labelError">{error}</label>
          <input type="submit" value="Enviar" className="button" onClick={handleLogin}></input>
        </div>

        <div className="bottomContent">
          <label className="bottomLabel">
            Não possui cadastro? <Link to="/signup" style={{textDecoration: "none"}}>Clique aqui</Link>
          </label>

        </div>
      </div>
    </div>
  );
}
