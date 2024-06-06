import { motion as m } from "framer-motion";
import EditorGraphData from "../relatorioPage/charts/EditorGraphData";
import EditorGraphStatusAnalista from "../relatorioPage/charts/EditorGraphStatusAnalista";
import EditorGraphCorrecoes from "../relatorioPage/charts/EditorStatusAnalista";
import { BuscasCity } from "../relatorioPage/searchCity";
import { BuscasNames } from "../relatorioPage/searchNames";

export default function ViewForUser() {
  return (
    <m.div
      initial={{ x: 1000 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
      className="container-data-2 "
    >
      <BuscasCity />
      <BuscasNames />
      <div className="row-charts">
        <EditorGraphData />
        <EditorGraphStatusAnalista />
        <EditorGraphCorrecoes />
      </div>
    </m.div>
  );
}
