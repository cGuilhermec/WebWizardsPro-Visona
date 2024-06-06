import { useEffect, useState } from "react";
import { api } from "../api/api";
import { DataItem } from "../interfaces/graphInterface";
import { useCity } from "./useCityContext";

const useGraphData = () => {
  const [dados, setDados] = useState<Array<[string, string | number]>>([]);
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

        const response = await api.get("/graph-area", {
          params: {
            cidade_Atuacao: gradeAtuacao,
          },
        });
        const data: DataItem[] = response.data;
        const chartData: Array<[string, number]> = data.map((item: any) => [
          item.status || "Desconhecido",
          parseFloat(item.total_km2),
        ]);
        setDados([["Status", "total_km2"], ...chartData]);
      } catch (error) {
        setError(error as Error);
      }
    };
    getData();
  }, [selectedCity]);

  return { dados, error };
};

export default useGraphData;
