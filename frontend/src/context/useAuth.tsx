import React, { useEffect, useState } from "react";
import { AuthContextProps } from "../interfaces/IAuthContextProps";
import { User } from "../interfaces/IUser";
import { SignInProps } from "../interfaces/ISignInProps";
import { api } from "../api/api";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../interfaces/IAuthContext";

export const AuthProvider: React.FC<AuthContextProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const loadingStoragedata = () => {
      const storageUser = localStorage.getItem("@Auth:user");
      const storageToken = localStorage.getItem("@Auth:token");
      const storageRole = localStorage.getItem("@Auth:role");

      if (storageToken && storageUser && storageRole) {
        try {
          const userObject: User = JSON.parse(storageUser);
          setUser(userObject);
        } catch (error) {
          console.error("Erro ao analisar os dados do usuário: ", error);
        }
      }
    };

    loadingStoragedata();
  }, []);

  const SignIn = async ({ email, password }: SignInProps): Promise<void> => {
    try {
      const response = await api.post("/login", {
        email,
        password,
      });

      const { token, user, role, message, userId, name } = response.data;

      if (message.error) {
        alert(message);
      } else if (response.status === 400) {
        alert("Email ou senha invalidas, tente de novo!");
      } else {
        setUser(response.data.user);

        //Salva o token e os dados dos usuários no localStorage.
        localStorage.setItem("@Auth:name", name);
        localStorage.setItem("@Auth:role", role);
        localStorage.setItem("@Auth:userId", userId);
        localStorage.setItem("@Auth:email", user);
        localStorage.setItem("@Auth:user", JSON.stringify(user));
        localStorage.setItem("@Auth:token", token);
      }
    } catch (error) {
      console.error("Erro capturado durante o login: ", error);
    }
  };

  const signOut = () => {
    localStorage.clear();
    setUser(null);

    return <Navigate to="/" />;
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        Signed: !!user,
        SignIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
