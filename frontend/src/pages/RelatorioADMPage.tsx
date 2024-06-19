import { useState } from "react";
import "../styles/relatorioPage.css";
import EditarUsuario from "../components/RegisterEditUser/EditarUsuario";
import CadastrarUsuario from "../components/RegisterEditUser/CadastrarUsuario";
// @ts-ignore
import Objects from "../images/registerEditUser/objects.png";
import Header from "../components/Header/header";
import { motion } from "framer-motion";
import AllView from "../components/Page_ADM_Graphcs/AllView";
import ViewForUser from "../components/Page_ADM_Graphcs/ViewForUser";
import { useCity } from "../context/useCityContext";
import { useNameForGraph } from "../context/useNameForGraphContext";

export default function RegisterEditUser() {
  const { setSelectedCity } = useCity();
  const { setSelectedNameForGraph } = useNameForGraph();

  const [activeButton, setActiveButton] = useState<"Cadastrar" | "Editar">(
    "Cadastrar"
  );

  const handleButtonClick = (buttonType: "Cadastrar" | "Editar") => {
    setActiveButton(buttonType);
    // setSelectedCity("");
    // setSelectedNameForGraph("");
  };

  return (
    <div className="body">
      <Header />
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: "0" }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        exit={{ opacity: 1, y: 1000 }}
        className="body"
      >
        <img src={Objects} alt="" className="background-image" />
        <div className="container-datas-graficos">
          <div className="container-graficos">
            <div className="btnsFuncao">
              {activeButton === "Cadastrar" && (
                <span className="frase1">Visão Geral</span>
              )}
              {activeButton === "Editar" && (
                <span className="frase2">Por Analista</span>
              )}
            </div>
            <div className="container-btns-graficos">
              <button
                className={`btn1 ${
                  activeButton === "Cadastrar" ? "active" : ""
                }`}
                onClick={() => handleButtonClick("Cadastrar")}
              >
                Visão Geral
              </button>

              <button
                className={`btn1 ${activeButton === "Editar" ? "active" : ""}`}
                onClick={() => handleButtonClick("Editar")}
              >
                Por Analista
              </button>
            </div>
          </div>
          {activeButton === "Cadastrar" ? <AllView /> : <ViewForUser />}
        </div>
      </motion.div>
    </div>
  );
}
