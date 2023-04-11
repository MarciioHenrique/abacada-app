//Aqui são definidos os tipos dos métodos que serão utilizados para uma maior segurança e menor chance de erros do código

export interface AuthContextType {
  user: usersType,
  signed: boolean,
  signout: () => void;
  signin: (email: string, senha: string) => Promise<string>;
  signup: (institution: string,email: string, senha: string) => Promise<string>;
}

export interface usersType {
  instituicao: string,
  usuario: {
    email: string,
    senha: string,
  } 
}

export interface userType {
  email: string,
  senha: string,
}

export interface teachersType {
  registro: number,
  nome: string,
  instituicao: usersType
}

export interface studentsType {
  registro: number,
  nome: string,
  professor: teachersType,
}