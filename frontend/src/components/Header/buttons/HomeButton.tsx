// @ts-ignore
import homebtn from "../../../images/header/home.png";
import { Link, useNavigate } from "react-router-dom";
// @ts-ignore
import homebtn_white from "../../../images/header/home_white.png";

export default function HomeButton() {
  const verifyRole = localStorage.getItem("@Auth:role");
  const navigate = useNavigate();

  const handleClick = () => {
    if (verifyRole === "adm") {
      navigate("/paneladm");
    } else if (verifyRole === "editor" || "revisor") {
      navigate("/relatoriopage");
    } else {
      navigate("/relatoriopage"); // Página padrão caso a role não seja 'admin' ou 'user'
    }
  };

  return (
    <button onClick={handleClick} className="btnhome">
      <img src={homebtn} className="home_btn" />
      <img src={homebtn_white} className="home_btn_white" />
    </button>
  );
}
