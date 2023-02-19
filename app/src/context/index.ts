import { createContext } from "react";

type User = {
  id: number;
  email: string;
  password: string;
  loggedIn: boolean;
};

export type LoginData = {
  email: string;
  password: string;
};

export const LoginUser = (data: LoginData): User | null => {
  if (data.email === "boss@gmail.com" && data.password === "boss") {
    let user = {
      id: 1,
      loggedIn: true,
      ...data,
    };
    localStorage.setItem("user", JSON.stringify(user));
    return user;
  }
  return null;
};

export const SetUser = (data: User) => {};

export const LogoutUser = () => {
  localStorage.clear();
};

export const defaultState = {
  user: JSON.parse(localStorage.getItem("user")!) || null,
  loginUser: (data: LoginData) => LoginUser(data),
  logoutUser: () => LogoutUser(),
};

type LoginContextType = {
  user: User | null;
  loginUser: (data: LoginData) => User | null;
  logoutUser: () => void;
};

export const AuthContext = createContext<LoginContextType>(defaultState);
