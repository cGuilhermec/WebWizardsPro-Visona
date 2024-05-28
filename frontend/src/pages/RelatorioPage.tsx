import "../styles/relatorioPage.css";
import BarCorrecoes from "../components/relatorioPage/charts/bar_correcoes";
import { PizzaPoligonos } from "../components/relatorioPage/charts/pizza_poligonos";
import AreaTotalVSstatus from "../components/relatorioPage/charts/areaTotal_vs_status";
import StatusAnalista from "../components/relatorioPage/charts/statusAnalista";
import Buscas from "../components/relatorioPage/search";
import { motion } from "framer-motion";
import Header from "../components/Header/header";

export default function RelatorioPage() {
  return (
    <div>
      <Header />
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: "0" }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        exit={{ opacity: 1, y: 1000 }}
        className="container-charts"
      >
        <Buscas />
        <div className="row-charts">
          <AreaTotalVSstatus />
          <StatusAnalista />
          <BarCorrecoes />
        </div>
        <div className="row-charts">
          <PizzaPoligonos />
        </div>
      </motion.div>
    </div>
  );
}
