// @ts-ignore
import moonbtn from "../../../images/header/moon.png"; 
// @ts-ignore
import moonbtn_white from "../../../images/header/moon_white.png";

export default function MoonButton(){
    return(
        <button className="btnmoon">
            <img src={moonbtn} className="moon_btn" />
            <img src={moonbtn_white} className="moon_btn_white" />
        </button>
    );
};