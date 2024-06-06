import { useEffect, useState } from "react";
import { api } from "../api/api";
import { DataItem } from "../interfaces/graphInterface";
import { useCity } from "./useCityContext";
import { useNameForGraph } from "./useNameForGraphContext";

const useEditorGraphData = () => {
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
            let name: string | undefined = selectedNameForGraph;

            if (selectedCity === "Atibaia") {
              gradeAtuacao = "tbgrade_atuacao_atibaia";
            } else if (selectedCity === "Cruzeiro") {
              gradeAtuacao = "tbgrade_atuacao_cruzeiro";
            } else if (selectedCity === "Taubaté") {
              gradeAtuacao = "tbgrade_atuacao_taubate";
            }

            const response = await api.get("/graph-area-editor", {
              params: {
                cidade_Atuacao: gradeAtuacao,
                name: name,
              },
            });

            const data: DataItem[] = response.data;

            const chartData: Array<[string, number]> = data.map((item: any) => [
              item.status || "Desconhecido",
              parseFloat(item.total_km2),
            ]);

            setDados([["Status", "total_km2"], ...chartData]);
          } else if (role === "editor") {
            let gradeAtuacao: string | undefined;
            let nomes: string | undefined | null = nome;

            if (selectedCity === "Atibaia") {
              gradeAtuacao = "tbgrade_atuacao_atibaia";
            } else if (selectedCity === "Cruzeiro") {
              gradeAtuacao = "tbgrade_atuacao_cruzeiro";
            } else if (selectedCity === "Taubaté") {
              gradeAtuacao = "tbgrade_atuacao_taubate";
            }

            const response = await api.get("/graph-area-editor", {
              params: {
                cidade_Atuacao: gradeAtuacao,
                name: nomes,
              },
            });

            const data: DataItem[] = response.data;

            const chartData: Array<[string, number]> = data.map((item: any) => [
              item.status || "Desconhecido",
              parseFloat(item.total_km2),
            ]);

            setDados([["Status", "total_km2"], ...chartData]);
          }
        }
      } catch (error) {
        setError(error as Error);
      }
    };
    getData();
  }, [selectedNameForGraph, selectedCity]);

  return { dados, error };
};

export default useEditorGraphData;
