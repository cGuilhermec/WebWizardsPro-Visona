

export default function Buscas(){
    return(
        <div className="row-1">
            <select className="seletor-cidade">
                <option value="" selected disabled>Selecione uma Cidade</option>
                <option value="adm" className='option-content'>Atibaia</option>
                <option value="revisor" className='option-content'>Cruzeiro</option>
                <option value="editor" className='option-content'>Taubaté</option>
            </select>
        </div>
    );
}