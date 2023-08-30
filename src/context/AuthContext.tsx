import {
  createContext,
  useState,
  PropsWithChildren,
  SetStateAction,
  Dispatch,
} from "react";

type User = {
  id?: string;
  email?: string;
  [key: string]: any;
};

interface IAuthContextProps {
  user?: User | null;
  setUser: Dispatch<SetStateAction<User | null>>;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
}

export const AuthContext = createContext<IAuthContextProps>({
  user: null,
  setUser: () => {},
  loading: true,
  setLoading: () => {},
});

export function AuthContextProvider({ children }: PropsWithChildren<{}>) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  return (
    <AuthContext.Provider value={{ user, setUser, loading, setLoading }}>
      {children}
    </AuthContext.Provider>
  );
}
