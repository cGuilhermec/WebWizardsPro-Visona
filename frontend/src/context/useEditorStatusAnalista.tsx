import { memo, useEffect, useState } from "react";
import { api } from "../api/api";
import { DataItem2 } from "../interfaces/graphInterface";
import { useCity } from "./useCityContext";
import { useNameForGraph } from "./useNameForGraphContext";

const useEditorGraphStatusAnalista = () => {
  const [dados, setDados] = useState<
    Array<[string, string | number, string | number]>
  >([]);
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

            const response = await api.get("/graph-bar-editor", {
              params: {
                cidade: gradeAtuacao,
                name: name,
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

            const response = await api.get("/graph-bar-editor", {
              params: {
                cidade: gradeAtuacao,
                name: nomes,
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

export default useEditorGraphStatusAnalista;
