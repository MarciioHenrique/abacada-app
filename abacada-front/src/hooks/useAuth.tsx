import { useContext } from "react";
import { AuthContext } from "../contexts/auth";

//usa o contexto quando solicitado em alguma parte do código
function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export default useAuth;