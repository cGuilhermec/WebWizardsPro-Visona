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
  const [role] = useState(rolee);
  const [image, setImage] = useState<string | ArrayBuffer | null>(null);
  const userId = localStorage.getItem("@Auth:userId");
  const { handleSumit, passwordRef } = useChangePassword(userId || "");

  return (
    <div>
      <Header />
      <motion.div
        className="container-perfil"
        initial={{ y: "100%" }}
        animate={{ y: "0" }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        exit={{ opacity: 1, y: 1000 }}
      >
        {/* <div className="container-foto">
          {image && (
            <img src={image as string} alt="Selected" className="foto-perfil" />
          )}
          <div>
            <label htmlFor="file-upload" className="custom-file-upload">
              Editar
            </label>
            <input
              id="file-upload"
              type="file"
              accept="image/*"
              style={{ display: "none" }}
            />
          </div>
        </div> */}
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

          <div className="dados1">
            <label htmlFor="">Senha:</label>
            <input ref={passwordRef} className="dados2"></input>
            <button
              onClick={async (e: FormEvent) => {
                e.preventDefault();
                await handleSumit();
              }}
            >
              Confrimar
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
