import { useState } from "react";
import "./header.css";
import HomeButton from "./buttons/HomeButton";
import NotificationButton from "./buttons/NotificationButton";
import SunButton from "./buttons/SunButton";
import MoonButton from "./buttons/MoonButton";
import SingOutButton from "./buttons/SingOutButton";

// @ts-ignore
import logo from "../../images/header/logo_visiona_preto.png";
import Perfil from "./buttons/Perfil";

export default function Header(){

    return (
        <header className="header">
            <div className="inicio">
                <img className="logoBranca" src={logo} />
            </div>
            <div className="final">
                <Perfil />
                <HomeButton />
                <NotificationButton />
                <SunButton />
                <MoonButton />
                <SingOutButton />
            </div>
        </header>
    );
};