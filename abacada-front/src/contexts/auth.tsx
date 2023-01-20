import React from "react";
import api from "../util/api";
import { createContext, useEffect, useState } from "react";
import { usersType, userType } from "../@types/types";

export const AuthContext = createContext({});

// cria o contexto de usuario, permitindo que os dados sejam utilizados dentro da aplicação
function AuthProvider({children}: any) {
  const [users, setUsers] = useState<usersType[]>([]);
  const [user, setUser] = useState<userType>();
  const [updateUsers, setUpdateUsers] = useState(false);

  useEffect(() => {
    api.get("/instituicao")
      .then(res => {setUsers(res.data); console.log("atualizou");})
      .catch(error => console.log(error));
  }, [updateUsers]);

  const signin = (email: string, password: string) => {
    const index = users.findIndex(u => u.email == email);
    if (index == -1) {
      return "Digite o email e/ou senha corretamente";
    }
    else {
      if (users[index].senha == password) {
        setUser({email, password});
        return "";
      }
      else {
        return "Digite o email e/ou senha corretamente";
      }
    }

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