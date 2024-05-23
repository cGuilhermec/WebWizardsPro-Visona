import React from "react";
import { Chart } from "react-google-charts";
import useGraphData from "../../../context/useGraphData";

const AreaTotalVSstatus = () => {
  const { dados, error } = useGraphData();

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!dados || dados.length === 0) {
    return <div>Carregando...</div>;
  }

  const options = {
    backgroundColor: 'transparent',
    title: "Area total * Area Status",
    is3D: true,
    legend: { position: 'bottom', textStyle: { fontSize: 11 }},
    fontSize: 13,
  };

  return (
    <div className="testechart">
      <Chart
        chartType="PieChart"
        data={dados}
        options={options}
        width={"100%"}
        height={"100%"}
      /> 
    </div>
  );
}

export default AreaTotalVSstatus;
