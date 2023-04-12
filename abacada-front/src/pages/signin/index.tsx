import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { AuthContextType } from "../../@types/types";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";

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

    signin(email, password)
      .then((resolve) => {
        navigate("/teachers");
      })
      .catch((reject) => {
        setError(reject);
      });
  };

  return (
    <div className="backgroundSignin">
      <div className="background-leftSignin">
        <img src={require("../../assets/Logo.png")} className="logoImage"/>
      </div>
      <div className="background-rightSignin">
        <div className="contentSignin">
          <label className="labelTitleSignin">Login</label>

          <label className="labelSignin">Email</label>
          <input  type="email"
                  name="email"
                  className="inputSignin"
                  placeholder="Digite seu E-mail"
                  onChange={(e: React.FormEvent) => [setEmail((e.target as HTMLInputElement).value), setError("")]}
          ></input>

          <label className="labelSignin">Senha</label>
          <input  type="password"
                  name="senha"
                  className="inputSignin"
                  placeholder="Digite sua senha"
                  onChange={(e: React.FormEvent) => [setPassword((e.target as HTMLInputElement).value), setError("")]}
            ></input>

          <label className="labelErrorSignin">{error}</label>
          <input type="submit" value="Entrar" className="buttonSignin" onClick={handleLogin}></input>
        </div>

        <div className="bottomContentSignin">
          <label className="bottomLabelSignin">
            Não possui cadastro? <Link to="/signup" style={{textDecoration: "none"}}>Clique aqui</Link>
          </label>

        </div>
      </div>
    </div>
  );
}
