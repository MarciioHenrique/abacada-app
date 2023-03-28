import React from "react";
import api from "../util/api";
import { createContext, useEffect, useState } from "react";
import { usersType, userType } from "../@types/types";

export const AuthContext = createContext({});

// cria o contexto de usuario, permitindo que os dados sejam utilizados dentro da aplicação
function AuthProvider({children}: any) {
  const [users, setUsers] = useState<usersType[]>([]);
  const [user, setUser] = useState<userType>();
  const [error, setError] = useState("");
  const [updateUsers, setUpdateUsers] = useState(false);

  useEffect(() => {
    api.get("/instituicao")
      .then(res => {setUsers(res.data); console.log("atualizou");})
      .catch(error => console.log(error));
  }, [updateUsers]);

  const signin = (email: string, senha: string) => {
    api.post("/login", {
      "email": email,
      "senha": senha
    })
      .then(res => {
        console.log(res);
        setUser(res.data);
        return "";
      })
      .catch(res => {
        console.log(JSON.stringify(res.response.data.message));
        setError(JSON.stringify(res.response.data.message));
        return JSON.stringify(res.response.data.message);
      });


  };

  const signup = (institution: string, email: string, password: string, passwordConfirmation: string) => {
    if (password === passwordConfirmation) {
      api.post("/instituicao", {
        nome: institution,
        email: email,
        senha: password,
      })
        .then(() => {
          setUpdateUsers(!updateUsers);
          alert("Cadastro realizado com sucesso");
        })
        .catch(()=> {
          alert("O cadastro não pôde ser concluído");
        });
        return "";
    }
    else {
      return "Confirme a senha corretamente";
    }
  };

  //const signout = () => {};


  return <AuthContext.Provider
    value={{user, signed: !!user, signin, signup}}
  >{children}</AuthContext.Provider>;
}

export default AuthProvider;