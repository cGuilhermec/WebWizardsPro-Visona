import { Chart } from "react-google-charts";
import useEditorGraphStatusAnalista from "../../../context/useEditorStatusAnalista";

const EditorGraphStatusAnalista = () => {
  const { dados, error } = useEditorGraphStatusAnalista();
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!dados || dados.length === 0) {
    return <div>Carregando...</div>;
  }
  const options = {
    backgroundColor: "transparent",
    title: "Status por analista",
    legend: { position: "bottom", textStyle: { fontSize: 11 } },
    fontSize: 13,
  };
  return (
    <div className="testechart">
      <Chart
        chartType="BarChart"
        width={"100%"}
        height={"100%"}
        data={dados}
        options={options}
      />
    </div>
  );
};

export default EditorGraphStatusAnalista;
