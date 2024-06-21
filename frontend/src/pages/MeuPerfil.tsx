import Header from "../components/Header/header";
import "../../src/styles/meuPerfil.css";
import { FormEvent, useState } from "react";
import { useChangePassword } from "../context/useChangePassword";
import { motion } from "framer-motion";
import { useCity } from "../context/useCityContext";

export default function MeuPerfil() {
  const nome = localStorage.getItem("@Auth:name");
  const user = localStorage.getItem("@Auth:email");
  const rolee = localStorage.getItem("@Auth:role")?.toLocaleUpperCase();

  const [name] = useState(nome);
  const [email] = useState(user);
  const [role] = useState(rolee?.toLowerCase());
  const [image, setImage] = useState<string | ArrayBuffer | null>(null);
  const userId = localStorage.getItem("@Auth:userId");
  const { handleSumit, passwordRef } = useChangePassword(userId || "");

  return (
    <div className="body">
      <Header />
      <motion.div
        className="container-perfil"
        initial={{ y: "100%" }}
        animate={{ y: "0" }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        exit={{ opacity: 1, y: 1000 }}
      >
        <div className="container-dados">
          <div className="dados1">
            <label htmlFor="">Nome:</label>
            <span className="dados2">{name}</span>
          </div>

          <div className="dados1">
            <label htmlFor="">E-mail:</label>
            <span className="dados2">{email}</span>
          </div>

          <div className="dados1">
            <label htmlFor="">Função:</label>
            <span className="dados2">{role}</span>
          </div>

          <p>Para alterar qualquer informação acima procure pelo administrador.</p>

          <div className="dados1 btnConf">
            <label htmlFor="">Senha:</label>
            <input ref={passwordRef} type="password" className="dados2"></input>
            <div className="btnConfirmar">
              <button
                onClick={async (e: FormEvent) => {
                  e.preventDefault();
                  await handleSumit();
                }}
              >
                Confirmar
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
