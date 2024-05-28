import { useRef } from "react";
import { api } from "../api/api";

export const useCadastroUser = (userId: string) => {
  const nameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const roleRef = useRef<HTMLSelectElement | null>(null);

  const handleSubmit = async () => {
    try {
      if (
        !nameRef.current?.value ||
        !emailRef.current?.value ||
        !roleRef.current?.value
      ) {
        return alert("Complete todos os campos, antes de enviar.");
      }
      if (
        nameRef.current?.value ||
        emailRef.current?.value ||
        roleRef.current?.value
      ) {
        const token = localStorage.getItem("@Auth:token");
        const response = await api.post(
          `/new-user/${userId}`,
          {
            name: nameRef.current?.value,
            email: emailRef.current?.value,
            password: passwordRef.current?.value,
            role: roleRef.current?.value,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        console.log(response.data);
        if (response.status === 200) {
          alert("Usuário cadastrado com sucesso!");
        } else if (response.status === 201) {
          alert(response.data.message);
        } else {
          alert("Erro ao cadastrar usuário: " + response.data.message);
        }
        return await response;
      }
    } catch (error) {
      console.error("Erro:", error);
    }
  };

  return { nameRef, emailRef, roleRef, passwordRef, handleSubmit };
};
