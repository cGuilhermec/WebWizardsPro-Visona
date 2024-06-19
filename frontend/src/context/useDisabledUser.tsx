import { api } from "../api/api";

export const DisabledUser = async (userId: string, id: string) => {


      try {

        const token = localStorage.getItem("@Auth:token");
        const response = await api.post(`/delete-user/${userId}`,
        {
            idUserDeleted: id  
        },
         {
            headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        return alert("Usuário desativado com sucesso!");

      } catch (error) {
        console.error(`Erro ao buscar os usuários: ${error}`);
      }

    };


