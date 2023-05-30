//Aqui são definidos os tipos dos métodos que serão utilizados para uma maior segurança e menor chance de erros do código

export interface AuthContextType {
  user: usersType,
  signed: boolean,
  signout: () => void;
  signin: (email: string, senha: string) => Promise<string>;
  signup: (institution: string,email: string, senha: string) => Promise<string>;
}

export interface usersType {
  id: string,
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
  registro: string,
  nome: string,
  email: string,
  instituicao: usersType
}

export interface heroiType {
  id: string,
  nome: string,
  icone: string,
  banner: string
}

export interface studentsType {
  registro: string,
  nome: string,
  heroi: heroiType,
  nivel: string,
  professor: teachersType,
}

export interface jogoType {
  id: string,
  nome: string,
  descricao: string,
  image: string,
  url: string,
  interno: boolean
}

export interface favoritoType {
  id: string,
  jogo: jogoType,
  aluno: studentsType
}

export interface historicoType {
  id: string,
  aluno: studentsType,
  jogo: jogoType,
  tempoMin: string,
  tempoSeg: string,
  concluido: boolean
}