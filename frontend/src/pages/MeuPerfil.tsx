import Header from "../components/Header/header";
import "../../src/styles/meuPerfil.css"
import { useState } from "react";

export default function MeuPerfil(){
    const [name, setName] = useState("Gustavo Carvalho");
    const [email, setEmail] = useState("gustavo@visiona.com.br");
    const [role, setRole] = useState("editor");

    return(
        <div>
            <Header />
            <div className="container-perfil">
                <div className="container-foto">
                    <img src="" className="foto-perfil" />
                    <button className="btnEditar">Editar</button>
                </div>
                <div className="container-dados">
                    <div className="dados1">
                        <label htmlFor="">Nome:</label>
                        <span className="dados2">{name}</span>
                    </div>

                    <div className="dados1">
                        <label htmlFor="">E-mail:</label>
                        <span className="dados2">{email}</span>
                    </div>

                    <div className="dados1">
                        <label htmlFor="">Função:</label>
                        <span className="dados2">{role}</span>
                    </div>

                </div>
            </div>
        </div>
    );
}