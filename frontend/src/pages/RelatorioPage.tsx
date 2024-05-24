import React from "react";
import { Chart } from "react-google-charts";
import "../styles/relatorioPage.css";
import  BarCorrecoes  from "../components/relatorioPage/charts/bar_correcoes";
import { PizzaPoligonos} from "../components/relatorioPage/charts/pizza_poligonos";
import AreaTotalVSstatus from "../components/relatorioPage/charts/areaTotal_vs_status";
import StatusAnalista from "../components/relatorioPage/charts/statusAnalista";
import Buscas from "../components/relatorioPage/search";

export default function RelatorioPage() {
  return (
    <div className="container-charts">
      <Buscas />
      <div className="row-charts">
        <AreaTotalVSstatus />
        <StatusAnalista />
        <BarCorrecoes />
      </div>
      <div className="row-charts">
        <PizzaPoligonos />
      </div>
    </div>
  );
}



