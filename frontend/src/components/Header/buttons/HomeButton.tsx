// @ts-ignore
import homebtn from "../../../images/header/home.png";
import { Link } from "react-router-dom";
// @ts-ignore
import homebtn_white from "../../../images/header/home_white.png";

export default function HomeButton() {
  return (
    <button className="btnhome">
      <Link to="/paneladm">
        <img src={homebtn} className="home_btn" />
        <img src={homebtn_white} className="home_btn_white" />
      </Link>
    </button>
  );
}
