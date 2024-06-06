import { useRef } from "react";
import { api } from "../api/api";

export const useChangePassword = (userId: string) => {
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const handleSumit = async () => {
    try {
      if (!passwordRef.current?.value) {
        return alert("Você precisa preencher o campo de senha");
      } else if (passwordRef.current?.value.length < 6) {
        return alert(
          "Por favor, crie uma senha com pelo menos 6 caracteres para garantir a segurança da sua conta."
        );
      }

      const token = localStorage.getItem("@Auth:token");

      const response = await api.post(
        `/attpass/${userId}`,
        {
          new_password: passwordRef.current?.value,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        alert("Senha atualizado com sucesso!");
      } else if (response.status === 201) {
        alert(response.data.message);
      } else {
        alert("Erro ao cadastrar usuário: " + response.data.message);
      }

      return await response;
    } catch (error) {
      console.error("Erro:", error);
    }
  };

  return { passwordRef, handleSumit };
};
