// @ts-ignore
import singout from "../../../images/header/singout.png"; 
// @ts-ignore
import singout_white from "../../../images/header/singout_white.png";

export default function SingOutButton(){
    return(
        <button className="btnsingout">
            <img src={singout} className="singout_btn" />
            <img src={singout_white} className="singout_btn_white" />
        </button>
    );
};