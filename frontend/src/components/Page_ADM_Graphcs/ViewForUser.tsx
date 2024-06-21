import { motion as m } from "framer-motion";
import EditorGraphData from "../relatorioPage/charts/EditorGraphData";
import EditorGraphStatusAnalista from "../relatorioPage/charts/EditorGraphStatusAnalista";
import EditorGraphCorrecoes from "../relatorioPage/charts/EditorStatusAnalista";
import { BuscasCity } from "../relatorioPage/searchCity";
import { BuscasNames } from "../relatorioPage/searchNames";
import BtnExtrair from "../relatorioPage/BtnExtrair";

export default function ViewForUser() {
  return (
    <m.div
      initial={{ x: 1000 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
      className="container-data-2-graficos"
    >
      <div className="row-1">
        <BuscasCity />
        <BuscasNames />
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
    </m.div>
  );
}
