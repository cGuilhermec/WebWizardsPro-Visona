import React from "react";
import { Chart } from "react-google-charts";
import useEditorGraphCorrecoes from "../../../context/useEditorGraphCorrecoes";

const EditorGraphCorrecoes = () => {
  const { dados, error } = useEditorGraphCorrecoes();

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!dados || dados.length === 0) {
    return <div>Carregando...</div>;
  }

  const cores = ["#FF0000", "#0000FF", "#FFFF80"];

  const dadosComCores = dados.map((row, index) => {
    if (index === 0) {
      return [...row, { role: "style" }];
    } else {
      return [...row, cores[index % cores.length]];
    }
  });

  const options = {
    title: "Correções",
    backgroundColor: "transparent",
    legend: "none",
    fontSize: 13,
    hAxis: {
      textStyle: {
        fontSize: 11,
      },
    },
  };

  return (
    <div className="testechart">
      <Chart
        chartType="ColumnChart"
        width={"100%"}
        height={"100%"}
        data={dadosComCores}
        options={options}
      />
    </div>
  );
};

export default EditorGraphCorrecoes;
