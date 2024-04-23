import { useState, useRef, useEffect } from "react";

// @ts-ignore
import defaultPhoto from "../../../images/header/default_user.png"

export default function Perfil(){

    const [nome, setNome] = useState("Gustavo Carvalho");
    const [perfilPhoto, setPerfilPhoto] = useState(defaultPhoto);

    return(
        <div>
            <button className={"perfil perfil_hover"}>
                <div className="ft_perfil">
                    <img src={defaultPhoto} alt="" />
                </div>
                <div>{nome}</div>
            </button>
            {/* <nav className="menu">
                <ul>
                    <li><a href="#">Meu Perfil</a></li>
                    <li><a href="#">Sair</a></li>
                </ul>
            </nav> */}
        </div>
    );
}