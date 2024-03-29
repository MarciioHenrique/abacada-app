import React from "react";
import api from "../util/api";
import { createContext,useState } from "react";
import {userType } from "../@types/types";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext({});

// cria o contexto de usuario, permitindo que os dados sejam utilizados dentro da aplicação
function AuthProvider({children}: any) {
  const [user, setUser] = useState<userType>();

  const signin = (email: string, senha: string) => {
    return new Promise((resolve, reject) => {
      api.post("/login", {
        "email": email,
        "senha": senha
      })
        .then(res => {
          setUser(res.data);
          resolve(res.data);
        })
        .catch(error => {
          reject(JSON.stringify(error.response.data.message));
        });
    });
  };

  const signup = (institution: string, email: string, senha: string) => {
    return new Promise((resolve, reject) => {
      api.post("/cadastro", {
        instituicao: institution,
        usuario: {
          email: email,
          senha: senha,
        } 
      })
        .then(res => {
          setUser(res.data);
          resolve("");
        })
        .catch(res => {
          reject(JSON.stringify(res.response.data.message));
        });
    }); 
  };

  const signout = () => {
    setUser(undefined);
  };


  return <AuthContext.Provider
    value={{user, signed: !!user, signin, signup, signout}}
  >{children}</AuthContext.Provider>;
}

export default AuthProvider;