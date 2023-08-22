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

export interface teacherType {
  registro: string,
  nome: string,
  email: string,
  instituicao: usersType
}

export interface teacherRequest {
  nome: string,
  email: string,
  instituicao: usersType | null
}

export interface heroType {
  id: string,
  nome: string,
  icone: string,
  banner: string
}

export interface studentType {
  registro: string,
  nome: string,
  heroi: heroType,
  vogal: string,
  estagio: string,
  professor: teacherType,
}

export interface studentRequest {
  nome: string,
  heroi: heroType | undefined,
  vogal: string,
  estagio: string,
  professor: teacherType | undefined,
}

export interface gameType {
  id: string,
  nome: string,
  descricao: string,
  image: string,
  url: string,
  interno: boolean
}

export interface favoriteType {
  id: string,
  jogo: gameType,
  aluno: studentType
}

export interface historicType {
  id: string,
  aluno: studentType,
  jogo: gameType,
  tempoMin: string,
  tempoSeg: string,
  concluido: boolean
}

export interface historicRequest {
  aluno: studentType | undefined,
  jogo: gameType | undefined,
  tempoMin: string,
  tempoSeg: string,
  concluido: boolean
}

export interface confirmationModalProps {
  isOpen: boolean;
  title: string;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export interface successModalProps {
  isOpen: boolean;
  title: string;
  message: string;
  onOK: () => void;
}

export interface errorModalProps {
  isOpen: boolean;
  title: string;
  message: string;
  onOK: () => void;
}

export interface gameModalProps {
  //game: gameType;
  onClose: () => void;
}