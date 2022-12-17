import React from "react";
import "./style.css";

export default function Login() {
  return (
    <div className="background">
      <div className="background-left">Olá1</div>
      <div className="background-right">
        <div className="content">
          <h3 style={{alignSelf: "center"}}>Login</h3>
          <label className="label">Email:</label>
          <input type="email" name="email" className="input"></input>
          <label className="label">Senha:</label>
          <input type="password" name="senha" className="input"></input>
          <input type="submit" value="Enviar" className="button"></input>
        </div>
      </div>
    </div>
  );
}
