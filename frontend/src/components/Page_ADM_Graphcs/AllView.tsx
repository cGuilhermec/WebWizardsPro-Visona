import { motion } from "framer-motion";
import { BuscasCity } from "../relatorioPage/searchCity";
import AreaTotalVSstatus from "../relatorioPage/charts/areaTotal_vs_status";
import StatusAnalista from "../relatorioPage/charts/statusAnalista";
import BarCorrecoes from "../relatorioPage/charts/bar_correcoes";
import "../../styles/relatorioPage.css";
import BtnExtrair from "../relatorioPage/BtnExtrair";

export default function AllView() {
  return (
    <motion.form
      initial={{ x: -1000 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
      className="container-data-1-graficos"
    >
      <div className="row-1">
        <BuscasCity />
      </div>
      <div className="row-charts" id="row-charts">

        <div className="teste">
          <AreaTotalVSstatus />
        </div>

        <div className="teste">
          <StatusAnalista />
        </div>

        <div className="teste">
          <BarCorrecoes />
        </div>

      </div>
      <div>
      <BtnExtrair />
      </div>
    </motion.form>
  );
}
