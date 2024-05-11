import { useState } from "react";


export default function CadastrarUsuario(){

    const [roleInput, setRoleInput] = useState("");
    
    return(
        <form className="container-data-1">
            <div className="inputs">
                <label htmlFor="" className="labels">Nome: </label>
                <input type="text" placeholder="Nome e Sobrenome"/>
            </div>
            
            <div className="inputs" >
                <label htmlFor="" className="labels">E-mail: </label>
                <input type="text" placeholder="usuario@visiona.com.br"/>
            </div>

            <div className="input-funcao">
                <label className='label-select'>Função:</label>
                <select className="inputs" value={roleInput} onChange={(e) => setRoleInput(e.target.value)}>
                    <option value="adm" className='option-content'>Adm</option>
                    <option value="revisor" className='option-content'>Revisor</option>
                    <option value="editor" className='option-content'>Editor</option>
                </select>
            </div>

            <div className="btnsubmit">
                <button>Confirmar</button>
            </div>
        </form>
    );
}