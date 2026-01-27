"use client";

import { api } from "@/lib/axios";
import { useRouter } from "next/navigation";
import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { toast } from "sonner";

type AuthContextType = {
  user: User | null;
  login: (username: string, password: string) => Promise<void>;
  register: (
    // username: string,
    email: string,
    password: string,
  ) => Promise<void>;
  newUser: {
    email: string;
    password: string;
  };
  setNewUser: Dispatch<
    SetStateAction<{
      email: string;
      password: string;
    }>
  >;
};

type User = {
  _id: string;
  name: string;
  email: string;
  role: string;
};

export const AuthContext = createContext({} as AuthContextType);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [newUser, setNewUser] = useState({ email: "", password: "" });
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);

  // console.log("user", user);

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
      router.push("/login");
    } catch (error) {
      toast.error("Email already exists");
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, login, register, setNewUser, newUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
