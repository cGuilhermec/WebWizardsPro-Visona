import { useRef, useState } from "react";
import { User } from "../interfaces/IUser";
import { api } from "../api/api";

const useUpdateUser = (id: string) => {
  const nameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const roleRef = useRef<HTMLSelectElement | null>(null);
  const [updatedUser, setUpdateUser] = useState<User[]>([]);

  const handleSubmit = async () => {
    console.log("iniciando a atualizacoa");
    try {
      if (
        !nameRef.current?.value ||
        !emailRef.current?.value ||
        !roleRef.current?.value ||
        !passwordRef.current?.value
      ) {
        return alert("Complete todos os campos, antes de enviar");
      }
      if (
        nameRef.current?.value ||
        emailRef.current?.value ||
        roleRef.current?.value ||
        passwordRef.current?.value
      ) {
        console.log(
          `Dados do user que esta sendo atualizado: nome: ${nameRef.current?.value}, email: ${emailRef.current?.value}, role: ${roleRef.current?.value} id:${id}`
        );
        const token = localStorage.getItem("@Auth:token");
        console.log(token);
        const response = await api.post(
          `/att-user/${id}`,
          {
            name: nameRef.current?.value,
            email: emailRef.current?.value,
            role: roleRef.current?.value,
            password: passwordRef.current?.value,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        console.log(response.data);

        setUpdateUser(response.data);

        if (response.status === 200) {
          alert(response.data.message.message);
        } else if (response.status === 409) {
          alert(`Error: ${response.data.error}`);
        } else {
          alert(`Erro ao atualizar o usuário: ${response.data.error}`);
        }

        return await response;
      }
    } catch (error: any) {
      if (error.response) {
        const errorMessage = error.response.data.message;
        console.error("Erro:", errorMessage);
        alert(errorMessage);
      }
    }
  };

  return { nameRef, emailRef, roleRef, passwordRef, handleSubmit, updatedUser };
};

export default useUpdateUser;
