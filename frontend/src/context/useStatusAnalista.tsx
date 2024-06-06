import { useEffect, useState } from "react";
import { api } from "../api/api";
import { DataItem2 } from "../interfaces/graphInterface";
import { useCity } from "./useCityContext";

const useGraphStatusAnalista = () => {
  const [dados, setDados] = useState<
    Array<[string, string | number, string | number]>
  >([]);
  const [error, setError] = useState<Error | null>(null);
  const { selectedCity } = useCity();

  useEffect(() => {
    const getData = async () => {
      try {
        let gradeAtuacao: string | undefined;

        if (selectedCity === "Atibaia") {
          gradeAtuacao = "tbgrade_atuacao_atibaia";
        } else if (selectedCity === "Cruzeiro") {
          gradeAtuacao = "tbgrade_atuacao_cruzeiro";
        } else if (selectedCity === "Taubaté") {
          gradeAtuacao = "tbgrade_atuacao_taubate";
        }

        const response = await api.get("/graph-bar", {
          params: {
            cidade: gradeAtuacao,
          },
        });
        const data: DataItem2[] = response.data;

        const chartData: Array<[string, number, number]> = data.map(
          (item: any) => [
            item.analista,
            item.andamento !== null ? parseFloat(item.andamento) : 0.0,
            parseFloat(item.finalizado),
          ]
        );

        setDados([["analista", "andamento", "finalizado"], ...chartData]);
      } catch (error) {
        setError(error as Error);
      }
    };

    getData();
  }, [selectedCity]);

  return { dados, error };
};

export default useGraphStatusAnalista;
