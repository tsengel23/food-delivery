"use client";

import { api } from "@/lib/axios";
import { useRouter } from "next/navigation";
import { createContext, PropsWithChildren, useContext, useState } from "react";
import { toast } from "sonner";

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
    try {
      const { data } = await api.post("/auth/login", {
        email,
        password,
      });

      const { user } = data;

      setUser(user);
      router.push("/");
    } catch (error) {
      toast.error("Invalid username or password");
    }
  };

  const register = async (
    // username: string,
    email: string,
    password: string,
  ) => {
    try {
      await api.post("/auth/register", {
        // username,
        email,
        password,
      });
      router.push("auth/login");
    } catch (error) {
      toast.error("Email already exists");
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
