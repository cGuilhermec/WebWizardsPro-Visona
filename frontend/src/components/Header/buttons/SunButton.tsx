// @ts-ignore
import sunbtn from "../../../images/header/sun.png"; 
// @ts-ignore
import sunbtn_white from "../../../images/header/sun_white.png";

export default function SunButton(){
    return(
        <button className="btnsun">
            <img src={sunbtn} className="sun_btn" />
            <img src={sunbtn_white} className="sun_btn_white" />
        </button>
    );
};