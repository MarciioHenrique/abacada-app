import React from "react";
import api from "../util/api";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({});

function AuthProvider({children}: any) {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    api.get("/instituicao")
      .then(res => console.log(res.data[0].email))
      .catch(error => console.log(error));
  }, []);

  const signin = (login: string, password: string) => {
    console.log(login, password);
  };

  const signup = () => {
    //faz o cadastro
  };

  const signout = () => {
    setUser(null);
  };


  return <AuthContext.Provider
    value={{user, signed: !!user, signin, signup, signout}}
  >{children}</AuthContext.Provider>;
}

export default AuthProvider;