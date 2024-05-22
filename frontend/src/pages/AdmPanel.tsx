import "../styles/admPanel.css";
//@ts-ignore
import map from "../images/AdmPanel/map.png";
//@ts-ignore
import satellite from "../images/AdmPanel/satellite.png";
//@ts-ignore
import img_card1 from "../images/AdmPanel/card1.png";
//@ts-ignore
import img_card2 from "../images/AdmPanel/card2.png";
import Card1 from "../components/AdmPanel/card1";
import Card2 from "../components/AdmPanel/card2";
import Header from "../components/Header/header";
import { motion } from "framer-motion";

export default function PanelAdm() {
  return (
    <div>
      <Header />
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: "0" }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        exit={{ opacity: 1, y: -1000 }}
        className="body"
      >
        <img className="img-boxmap" src={map} />
        <img className="img-boxsat" src={satellite} />
        <div className="cardcontainer">
          <Card1 />
          <Card2 />
        </div>
      </motion.div>
    </div>
  );
}
