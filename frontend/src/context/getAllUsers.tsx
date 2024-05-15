import { useEffect, useState } from "react";
import { User } from "../interfaces/IUser";
import { api } from "../api/api";

export const useAllUsers = (userId: string) => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const token = localStorage.getItem("@Auth:token");
        const response = await api.get(`/users/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUsers(response.data);
      } catch (error) {
        console.error(`Erro ao buscar os usuários: ${error}`);
      }
    };

    fetchUsers();
  }, [userId]); //Executar novamente quando o userId mudar.

  return users;
};
