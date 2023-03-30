//Aqui são definidos os tipos dos métodos que serão utilizados para uma maior segurança e menor chance de erros do código

export interface AuthContextType {
  signed: boolean,
  signout: () => void;
  signin: (email: string, password: string) => Promise<string>;
  signup: (institution: string,email: string, password: string, passwordConfirmation: string) => Promise<string>;
}

export interface usersType {
  id: number,
  nome: string,
  email: string,
  senha: string,
}

export interface userType {
  email: string,
  password: string,
}

export interface teachersType {
  id: number,
  nome: string,
  instituicao: string,
}

export interface studentsType {
  id: number,
  nome: string,
  professor: string,
}