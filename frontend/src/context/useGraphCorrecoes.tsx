import { useEffect, useState } from "react";
import { api } from "../api/api";
import { ChartItem, DataItem } from "../interfaces/graphInterface";
import { useCity } from "./useCityContext";

const useGraphCorrecoes = () => {
  const [dados, setDados] = useState<Array<[string, string | number]>>([]);
  const [error, setError] = useState<Error | null>(null);
  const { selectedCity } = useCity();
  const token = localStorage.getItem("@Auth:token");

  useEffect(() => {
    const getData = async () => {
      try {
        let gradeAtuacao: string | undefined;
        let gradeApontamneto: string | undefined;

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
      } catch (error) {
        setError(error as Error);
      }
    };

    getData();
  }, [selectedCity]);

  return { dados, error };
};

export default useGraphCorrecoes;
