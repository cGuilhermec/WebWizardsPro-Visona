//@ts-ignore
import img_card2 from "../../images/AdmPanel/card2.png";
import { Link } from "react-router-dom";
import "./cards.css";

export default function Card2() {
  return (
    <div className="card2">
      <div className="cardtxt2">
        <div className="cardtxt2-1">
          <h2>Painel de usuários</h2>
          <p>Acesse a criação e edição de usuários.</p>
        </div>
        <button className="btnadm">
          {" "}
          <Link to="/registeredituser">Acessar </Link>
        </button>
      </div>

      <div className="cardimg2">
        <img className="img-card2" src={img_card2} />
      </div>
    </div>
  );
}
