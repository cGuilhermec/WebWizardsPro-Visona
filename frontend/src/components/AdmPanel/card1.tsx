//@ts-ignore
import img_card1 from "../../images/AdmPanel/card1.png";
import { Link } from "react-router-dom";
import "./cards.css";
import { motion } from "framer-motion";

export default function Card1() {
  return (
    <motion.div
      className="card1"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.3,
        ease: [0, 0.71, 0.2, 1.01],
        scale: {
          type: "spring",
          damping: 10,
          stiffness: 100,
          restDelta: 0.001,
        },
      }}
      whileHover={{ scale: 1.2 }}
    >
      <div className="cardtxt1">
        <div className="cardtxt1-1">
          <h2>Painel de Projetos</h2>
          <p>Acesse o painel de projetos.</p>
        </div>
        <motion.button whileHover={{ scale: 1.1 }} className="btnadm">
          <Link to="/relatoriopage">Acessar</Link>
        </motion.button>
      </div>

      <div className="cardimg1">
        <img className="img-card1" src={img_card1} />
      </div>
    </motion.div>
  );
}
