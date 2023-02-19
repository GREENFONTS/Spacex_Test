type User = {
  id: number;
  email: string;
  password: string;
};

type LoginData = {
  email: string;
  password: string;
};

export const loginUser = (data: LoginData): User | null => {
  if (data.email === "boss.gmail.com" && data.password === "boss") {
    let user = {
      id: 1,
      ...data,
    };
    localStorage.setItem("user", JSON.stringify(user));
    return user;
  }
  return null;
};

export const logoutUser = (data: LoginData) => {
  localStorage.clear();
};

export type LoginContextType = {
  user: User;
  loginUser: (data: LoginData) => User | null;
  logoutUser: () => void;
};
