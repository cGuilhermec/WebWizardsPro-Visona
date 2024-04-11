import "../styles/loginPage.css";

export default function LoginPage(){
    return (
        <div className="bloco">
            <div className="bloco1">
                <div className="bloco2">
                    <div className="bloco3">
                        <img decoding="async" className="logoBranca" src="https://visionaespacial.com/wp-content/themes/VisionaEspacial/assets/img/logo-branca-completa.svg" />
                        <div className="boxbaixo">
                            <div className="inputbox">
                                <div className="inputs">
                                    {/* <label htmlFor="">e-mail</label> */}
                                    <input type="text" placeholder="e-mail"/>
                                </div>
                                <div className="inputs">
                                    {/* <label htmlFor="">senha</label> */}
                                    <input type="password" placeholder="senha"/>
                                </div>
                            </div>
                            <button className="loginbtn">Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}