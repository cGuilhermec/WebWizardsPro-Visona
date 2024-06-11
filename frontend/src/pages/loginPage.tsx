import { FormEvent, useContext, useEffect, useState } from "react";
import "../styles/loginPage.css";
import { AuthContext } from "../interfaces/IAuthContext";
import { useNavigate } from "react-router-dom";
import VideoComponent from "../components/LoginPage/VideoComponent";
import { motion } from "framer-motion";


export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { SignIn, Signed } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const storedRole = localStorage.getItem("@Auth:role");
    if (storedRole) {
      if (storedRole === "adm") {
        navigate("/paneladm");
      } else {
        navigate("/relatorio-page");
      }
    }
  }, [navigate, Signed]);

  const handleSignIn = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      email,
      password,
    };

    await SignIn(data);
  };

  return (
    <div className="bloco">
      <div className="bloco1">
        <VideoComponent />
        <div
          className="bloco2"
        >
          <div className="bloco3">
            <img
              decoding="async"
              className="logoBranca"
              src="https://visionaespacial.com/wp-content/themes/VisionaEspacial/assets/img/logo-branca-completa.svg"
            />
            <div className="boxbaixo">
              <form onSubmit={handleSignIn} className="inputbox">
                <div className="wrap-input">
                  <input
                    className={email !== "" ? "has-val" : "input"}
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <span
                    className="focus-input"
                    data-placeholder="E-mail"
                  ></span>
                </div>
                <div className="wrap-input">
                  <input
                    className={password !== "" ? "has-val" : "input"}
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <span className="focus-input" data-placeholder="Senha"></span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  type="submit"
                  className="loginbtn"
                >
                  Login
                </motion.button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
