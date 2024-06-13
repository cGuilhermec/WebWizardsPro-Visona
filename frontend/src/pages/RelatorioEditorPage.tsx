import "../styles/relatorioPage.css";
import BarCorrecoes from "../components/relatorioPage/charts/bar_correcoes";
import AreaTotalVSstatus from "../components/relatorioPage/charts/areaTotal_vs_status";
import StatusAnalista from "../components/relatorioPage/charts/statusAnalista";
import { BuscasCity } from "../components/relatorioPage/searchCity";
import { motion } from "framer-motion";
import Header from "../components/Header/header";
import { BuscasNames } from "../components/relatorioPage/searchNames";
import EditorGraphData from "../components/relatorioPage/charts/EditorGraphData";
import EditorGraphStatusAnalista from "../components/relatorioPage/charts/EditorGraphStatusAnalista";
import EditorGraphCorrecoes from "../components/relatorioPage/charts/EditorStatusAnalista";
import BtnExtrair from "../components/relatorioPage/BtnExtrair";

export default function RelatorioEditorPage() {
  return (
    <div className="body">
      <Header />
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: "0" }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        exit={{ opacity: 1, y: 1000 }}
        className="container-datas-graficos"
      >
        <div className="container-data-1-graficos">

          <div className="row-1">
            <BuscasCity />
          </div>

          <div className="row-charts" id="row-charts">

            <div className="teste">
              <EditorGraphData />
            </div>

            <div className="teste">
              <EditorGraphStatusAnalista />
            </div>

            <div className="teste">
              <EditorGraphCorrecoes />
            </div>

          </div>

          <BtnExtrair />
        </div>

      </motion.div>
    </div>
  );
}
