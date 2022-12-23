import React from "react";
import api from "../util/api";
import { createContext, useEffect, useState } from "react";
import { usersType, userType } from "../@types/types";

export const AuthContext = createContext({});

function AuthProvider({children}: any) {
  const [users, setUsers] = useState<usersType[]>([]);
  const [user, setUser] = useState<userType>();

  useEffect(() => {
    api.get("/instituicao")
      .then(res => setUsers(res.data))
      .catch(error => console.log(error));
  }, []);

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

  const signup = () => {
    //faz o cadastro
  };

  //const signout = () => {};


  return <AuthContext.Provider
    value={{user, signed: !!user, signin, signup}}
  >{children}</AuthContext.Provider>;
}

export default AuthProvider;