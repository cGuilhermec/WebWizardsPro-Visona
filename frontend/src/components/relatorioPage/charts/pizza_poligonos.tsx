import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Hours per Day"],
  ["Work", 11],
  ["Eat", 2],
  ["Commute", 2],
];

export const options = {
  title: "My Daily Activities",
  pieHole: 0.4,
  is3D: false,
  backgroundColor: "transparent",
  legend: { position: "bottom", textStyle: { fontSize: 11 } },
  fontSize: 13,
};

export function PizzaPoligonos() {
  return (
    <div className="testechart">
      <Chart
        chartType="PieChart"
        width={"100%"}
        height={"100%"}
        data={data}
        options={options}
      />
    </div>
  );
}
