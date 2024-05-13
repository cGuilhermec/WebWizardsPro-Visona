import { FormEvent, useState } from "react";
import { useCadastroUser } from "../../context/useCadastroUser";

export default function CadastrarUsuario() {
  const [roleInput, setRoleInput] = useState("");
  const userId = localStorage.getItem("@Auth:userId");
  const { nameRef, emailRef, roleRef, handleSubmit } = useCadastroUser(
    userId || ""
  );

  return (
    <form className="container-data-1">
      <div className="inputs">
        <label htmlFor="" className="labels">
          Nome:{" "}
        </label>
        <input ref={nameRef} type="text" placeholder="Nome e Sobrenome" />
      </div>

      <div className="inputs">
        <label htmlFor="" className="labels">
          E-mail:{" "}
        </label>
        <input
          ref={emailRef}
          type="text"
          placeholder="usuario@visiona.com.br"
        />
      </div>

      <div className="input-funcao">
        <label className="label-select">Função:</label>
        <select
          className="inputs"
          value={roleInput}
          ref={roleRef}
          onChange={(e) => setRoleInput(e.target.value)}
        >
          <option value="adm" className="option-content">
            Adm
          </option>
          <option value="revisor" className="option-content">
            Revisor
          </option>
          <option value="editor" className="option-content">
            Editor
          </option>
        </select>
      </div>

      <div
        onClick={async (e: FormEvent) => {
          e.preventDefault();
          await handleSubmit();
        }}
        className="btnsubmit"
      >
        <button>Confirmar</button>
      </div>
    </form>
  );
}
