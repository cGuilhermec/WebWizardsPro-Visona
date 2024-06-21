import { useEffect, useState } from "react";
import { api } from "../api/api";
import { DataItem } from "../interfaces/graphInterface";
import { useCity } from "./useCityContext";
import { useNameForGraph } from "./useNameForGraphContext";

const useEditorGraphCorrecoes = () => {
  const [dados, setDados] = useState<Array<[string, string | number]>>([]);
  const [error, setError] = useState<Error | null>(null);
  const { selectedCity } = useCity();
  const { selectedNameForGraph } = useNameForGraph();

  const role = localStorage.getItem("@Auth:role");
  const nome = localStorage.getItem("@Auth:name");

  useEffect(() => {
    const getData = async () => {
      try {
        if (role) {
          if (role === "adm") {
            let gradeAtuacao: string | undefined;
            let gradeApontamneto: string | undefined;
            let name: string | undefined = selectedNameForGraph;

            if (selectedCity === "Atibaia") {
              gradeAtuacao = "tbgrade_atuacao_atibaia";
              gradeApontamneto = "tbapontamento_alteracao_atibaia";
            } else if (selectedCity === "Cruzeiro") {
              gradeAtuacao = "tbgrade_atuacao_cruzeiro";
              gradeApontamneto = "tbapontamento_alteracao_cruzeiro";
            } else if (selectedCity === "Taubaté") {
              gradeAtuacao = "tbgrade_atuacao_taubate";
              gradeApontamneto = "tbapontamento_alteracao_taubate";
            }

            const response = await api.get(`/graph-correcao`, {
              params: {
                cidade_Apontamento: gradeApontamneto,
                cidade_Atuacao: gradeAtuacao,
                name: name,
              },
            });

            const data: DataItem[] = response.data;

            const chartData: Array<[string, number]> = data.map((item: any) => {
              return [
                item.correcao || "Desconhecido",
                parseInt(item.total_correcoes, 10),
              ];
            });

            setDados([["Correção", "Total Correções"], ...chartData]);
          } else if (role === "editor") {
            let gradeAtuacao: string | undefined;
            let gradeApontamneto: string | undefined;
            let nomes: string | undefined | null = nome;

            if (selectedCity === "Atibaia") {
              gradeAtuacao = "tbgrade_atuacao_atibaia";
              gradeApontamneto = "tbapontamento_alteracao_atibaia";
            } else if (selectedCity === "Cruzeiro") {
              gradeAtuacao = "tbgrade_atuacao_cruzeiro";
              gradeApontamneto = "tbapontamento_alteracao_cruzeiro";
            } else if (selectedCity === "Taubaté") {
              gradeAtuacao = "tbgrade_atuacao_taubate";
              gradeApontamneto = "tbapontamento_alteracao_taubate";
            }

            const response = await api.get(`/graph-correcao`, {
              params: {
                cidade_Apontamento: gradeApontamneto,
                cidade_Atuacao: gradeAtuacao,
                name: nomes,
              },
            });

            const data: DataItem[] = response.data;

            const chartData: Array<[string, number]> = data.map((item: any) => {
              return [
                item.correcao || "Desconhecido",
                parseInt(item.total_correcoes, 10),
              ];
            });

            setDados([["Correção", "Total Correções"], ...chartData]);
          }
        }
      } catch (error) {
        setError(error as Error);
      }
    };

    getData();
  }, [selectedCity, selectedNameForGraph]);

  return { dados, error };
};

export default useEditorGraphCorrecoes;
