import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export function User() {
  const name = localStorage.getItem("@Auth:name");
  const role = localStorage.getItem("@Auth:role")?.toLocaleUpperCase();

  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: "0" }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      exit={{ opacity: 1 }}
    >
      <h1>
        Seja bem-vindo {role} {name}
      </h1>
      <motion.button whileHover={{ scale: 1.1 }} className="btnadm">
        <Link to="/paneladm">Acessar </Link>
      </motion.button>
    </motion.div>
  );
}
