import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { AuthContextType } from "../../@types/types";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";

export default function Signup() {
  const { signup } = useAuth() as AuthContextType;
  const navigate = useNavigate();

  const [institution, setInstitution] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [error, setError] = useState("");

  const handleSignUp = () => {
    if (!institution || !email || !password || !passwordConfirmation) {
      setError("Preencha todos os campos");
      return;
    }

    const res: any = signup(institution, email, password, passwordConfirmation);

    if (res == "") {
      navigate("/");
    }
    else {
      setError(res);
    }
  };

  const handleComeBack = () => {
    navigate("/");
  };

  return (
    <div className="background">
      <div className="background-left">
        <img src={require("../../assets/Logo.png")}/>
      </div>
      <div className="background-right">
        <div className="content">
          <label className="labelTitle">Cadastro</label>

          <label className="label">Instituição</label>
          <input  type="text"
                  name="nome"
                  className="input"
                  placeholder="Digite a Instituição"
                  onChange={(e: React.FormEvent) => [setInstitution((e.target as HTMLInputElement).value), setError("")]}
          ></input>

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

          <label className="label">Confirme a senha</label>
          <input  type="password"
                  name="senha"
                  className="input"
                  placeholder="Digite sua senha"
                  onChange={(e: React.FormEvent) => [setPasswordConfirmation((e.target as HTMLInputElement).value), setError("")]}
          ></input>

          <label className="labelError">{error}</label>
          <div className="buttonsContainer">
            <input type="submit" value="Voltar" className="buttonVoltar" onClick={handleComeBack}></input>
            <input type="submit" value="Enviar" className="button" onClick={handleSignUp}></input>
          </div>

        </div>


      </div>
    </div>
  );
}
