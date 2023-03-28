import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { AuthContextType } from "../../@types/types";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";

//pagina de cadastro
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
    <div className="backgroundSignup">
      <div className="background-leftSignup">
        <img src={require("../../assets/Logo.png")} className="logoImage"/>
      </div>
      <div className="background-rightSignup">
        <div className="contentSignup">
          <label className="labelTitleSignup">Cadastro</label>

          <label className="labelSignup">Instituição</label>
          <input  type="text"
                  name="nome"
                  className="inputSignup"
                  placeholder="Digite a Instituição"
                  onChange={(e: React.FormEvent) => [setInstitution((e.target as HTMLInputElement).value), setError("")]}
          ></input>

          <label className="labelSignup">Email</label>
          <input  type="email"
                  name="email"
                  className="inputSignup"
                  placeholder="Digite seu E-mail"
                  onChange={(e: React.FormEvent) => [setEmail((e.target as HTMLInputElement).value), setError("")]}
          ></input>

          <label className="labelSignup">Senha</label>
          <input  type="password"
                  name="senha"
                  className="inputSignup"
                  placeholder="Digite sua senha"
                  onChange={(e: React.FormEvent) => [setPassword((e.target as HTMLInputElement).value), setError("")]}
          ></input>

          <label className="labelSignup">Confirme a senha</label>
          <input  type="password"
                  name="senha"
                  className="inputSignup"
                  placeholder="Digite sua senha"
                  onChange={(e: React.FormEvent) => [setPasswordConfirmation((e.target as HTMLInputElement).value), setError("")]}
          ></input>

          <label className="labelErrorSignup">{error}</label>
          <div className="buttonsContainerSignup">
            <input type="submit" value="Voltar" className="buttonVoltarSignup" onClick={handleComeBack}></input>
            <input type="submit" value="Enviar" className="buttonSignup" onClick={handleSignUp}></input>
          </div>

        </div>


      </div>
    </div>
  );
}
