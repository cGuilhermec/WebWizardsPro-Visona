//@ts-ignore
import img_card2 from "../../images/AdmPanel/card2.png";
import { Link } from "react-router-dom";
import "./cards.css";
import { motion } from "framer-motion";

export default function Card2() {
  return (
    <motion.div
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
      className="card2"
    >
      <div className="cardtxt2">
        <div className="cardtxt2-1">
          <h2>Painel de usuários</h2>
          <p>Acesse a criação e edição de usuários.</p>
        </div>
        <motion.button whileHover={{ scale: 1.1 }} className="btnadm">
          {" "}
          <Link to="/registeredituser">Acessar </Link>
        </motion.button>
      </div>

      <div className="cardimg2">
        <img className="img-card2" src={img_card2} />
      </div>
    </motion.div>
  );
}
