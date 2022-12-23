export interface AuthContextType {
  signed: boolean,
  signout: () => void;
  signin: (email: string, password: string) => void;
  signup: (institution: string,email: string, password: string, passwordConfirmation: string) => void;
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