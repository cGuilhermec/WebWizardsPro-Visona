import "../styles/admPanel.css";
//@ts-ignore
import map from "../images/AdmPanel/map.png";
//@ts-ignore
import satellite from "../images/AdmPanel/satellite.png";
//@ts-ignore
import img_card1 from "../images/AdmPanel/card1.png";
//@ts-ignore
import img_card2 from "../images/AdmPanel/card2.png";
import Card1 from "../components/AdmPanel/card1";
import Card2 from "../components/AdmPanel/card2";

export default function PanelAdm() {
  return (
    <div className="body">
        <img className="img-boxmap" src={map} />
        <img className="img-boxsat" src={satellite} />
        <div className="cardcontainer">
            <Card1 />
            <Card2 />
        </div>
    </div>
  );
}
