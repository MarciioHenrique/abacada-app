
export interface AuthContextType {
  signout: () => void;
  signin: (email: string, password: string) => void;
}