//@ts-ignore
import img_card1 from "../../images/AdmPanel/card1.png";
import { Link } from "react-router-dom";
import "./cards.css";


export default function Card1(){
    return(
        <div className="card1">
          <div className="cardtxt1">
            <div className="cardtxt1-1">
                <h2>Painel de Projetos</h2>
                <p>Acesse o painel de projetos.</p>
            </div>
            <button className="btnadm">
          {" "}
          <Link to="/relatoriopage">Acessar </Link>
        </button>
          </div>

          <div className="cardimg1">
            <img className="img-card1" src={img_card1} />
          </div>
        </div>
    );
}