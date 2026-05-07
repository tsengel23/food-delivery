"use client";

import { api } from "@/lib/axios";
import { useRouter } from "next/navigation";
import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { toast } from "sonner";

type AuthContextType = {
  user: User | null;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
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
  email: string;
  role: "owner" | "manager" | "customer";
};

type LoginResponse = {
  user: User;
  accessToken: string;
};

export const AuthContext = createContext({} as AuthContextType);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [newUser, setNewUser] = useState({ email: "", password: "" });
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);

  // console.log("user", user);

  const login = async (email: string, password: string) => {
    try {
      const { data } = await api.post<LoginResponse>("/auth/login", {
        email,
        password,
      });

      const { user, accessToken } = data;

      localStorage.setItem("accessToken", accessToken);

      setUser(user);
      // owner/manager → admin dashboard, customer → нүүр хуудас
      const isStaff = ["owner", "manager"].includes(user.role);
      router.push(isStaff ? "/admin" : "/");
    } catch (error) {
      toast.error("Invalid username or password");
    }
  };

  const logout = () => {
    localStorage.removeItem("accessToken");
    setUser(null);
    router.push("/");
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

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");

    const fetchMe = async () => {
      try {
        const { data } = await api.get<{ user: User }>("/auth/me", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        setUser(data.user);
      } catch {
        localStorage.removeItem("accessToken");
      }
    };

    fetchMe();
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, login, logout, register, setNewUser, newUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
