import { useState, useRef, useContext } from "react";

// @ts-ignore
import defaultPhoto from "../../../images/header/default_user.png";
// @ts-ignore
import singout from "../../../images/header/singout.png";
// @ts-ignore
import singout_white from "../../../images/header/singout_white.png";
// @ts-ignore
import configuration from "../../../images/header/configuration.png";
// @ts-ignore
import configuration_white from "../../../images/header/configuration_white.png";
import { AuthContext } from "../../../interfaces/IAuthContext";
import { Link } from "react-router-dom";

export default function Perfil() {
  const dropDownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive);
  const { signOut } = useContext(AuthContext);
  const name = localStorage.getItem("@Auth:name");

  const [nome, setNome] = useState(name);
  const foto = localStorage.getItem("selectedImage");
  const [perfilPhoto, setPerfilPhoto] = useState(foto);

  return (
    <div>
      <div className="menu-container">
        <button
          onClick={onClick}
          className={`perfil ${isActive ? "active" : "inactive"}`}
        >
          {/* <div className="ft_perfil">
            <img src={perfilPhoto as string} alt="" />
          </div> */}
          <div className="nome">{nome}</div>
        </button>

        <nav
          ref={dropDownRef}
          className={`menu ${isActive ? "active" : "inactive"}`}
        >
          <a href="#">
            <button className="confbtn">
              <p><Link to="/meuperfil">Meu Perfil</Link></p>
              <img src={configuration_white} alt="" className="btnconf_white" />
              <img src={configuration} alt="" className="btnconf" />
            </button>
          </a>

          <a href="#">
            <button onClick={signOut} className="sairbtn">
              Sair
              <img src={singout_white} alt="" className="btnsair_white" />
              <img src={singout} alt="" className="btnsair" />
            </button>
          </a>
        </nav>
      </div>
    </div>
  );
}
