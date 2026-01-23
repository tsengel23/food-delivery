"use client";

import { api } from "@/lib/axios";
import { useRouter } from "next/navigation";
import { createContext, PropsWithChildren, useContext, useState } from "react";

type AuthContextType = {
  user: User | null;
  login: (username: string, password: string) => Promise<void>;
  register: (
    username: string,
    email: string,
    password: string,
  ) => Promise<void>;
};

type User = {
  _id: string;
  name: string;
  email: string;
  role: string;
};

export const AuthContext = createContext({} as AuthContextType);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string) => {
    const { data } = await api.post("/auth/login", {
      email,
      password,
    });

    const { user } = data;

    setUser(user);

    router.push("/");
  };

  const register = async (
    username: string,
    email: string,
    password: string,
  ) => {
    await api.post("/auth/register", {
      username,
      email,
      password,
    });
    router.push("auth/login");
  };

  return (
    <AuthContext.Provider value={{ user, login, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
