import * as React from 'react';
import { createContext, useContext, useState } from "react";
import AuthClient, { ELoginType, User } from "./auth-api.client";

interface IUser {
  email: string
}

interface IAuthContext {
  user: IUser | null,
  isAuthenticated: boolean,
  login: (type: ELoginType) => Promise<void>,
  logout: () => Promise<void>,
}

type Props = {
  children: React.ReactNode
}

const authClient = new AuthClient();

function useProvideAuth() {
  const [user, setUser] = useState<User | null>(null);

  const login = (type: ELoginType) => {
    return authClient.login(type).then((user) => {
      setUser(user);
    });
  };

  const logout = () => {
    setUser(null);
    return authClient.logout();
  };

  return {
    user,
    isAuthenticated: !!user,
    login,
    logout
  };
}

const AuthContext = createContext<IAuthContext | null >(null);

export function AuthContextProvider ({ children }: Props) {
  const auth = useProvideAuth();

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export function useAuth () : IAuthContext {
  const context = useContext(AuthContext);

  if (context === null) { throw new Error('You probably forgot a <AuthContextProvider> context provider'); }

  return context;
}
