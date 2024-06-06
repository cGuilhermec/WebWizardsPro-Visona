import { useState, useRef, FormEvent, useEffect } from "react";
// @ts-ignore
import dropdown from "../../images/registerEditUser/dropdown.png";
// @ts-ignore
import dropdown_white from "../../images/registerEditUser/dropdown_white.png";
import { useAllUsers } from "../../context/getAllUsers";
import { User } from "../../interfaces/IUser";
import useUpdateUser from "../../context/useUpdateUser";
import { motion as m } from "framer-motion";

export default function EditarUsuario() {
  // Estado para controlar se o dropdown está aberto ou fechado
  const [isOpen, setIsOpen] = useState(false);

  // Estado para o usuário selecionado
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  // Estados para os campos de alteração
  const [nomeInput, setNomeInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [roleInput, setRoleInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  // Referência para o elemento do botão dropdown
  const dropdownRef = useRef<HTMLDivElement>(null);

  const userId = localStorage.getItem("@Auth:userId");
  const users = useAllUsers(userId || "");

  const id = selectedUser?.id;
  const { nameRef, emailRef, roleRef, passwordRef, handleSubmit, updatedUser } =
    useUpdateUser(id || "");

  // Função para lidar com o clique fora do dropdown
  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  // Efeito para adicionar ouvinte de eventos para fechar o dropdown quando clicado fora dele
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [updatedUser]);

  // Função para lidar com a seleção de um usuário
  const handleUserSelect = (user: User) => {
    setSelectedUser(user);
    setNomeInput(user.name);
    setEmailInput(user.email);
    setRoleInput(user.role);
    setPasswordInput(user.password);
    setIsOpen(false); // Fecha o dropdown após selecionar um usuário
  };

  return (
    <m.div
      initial={{ x: 1000 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
      ref={dropdownRef}
      className="container-data-2 "
    >
      <div className="container-dropdown-user">
        <div className="dropdown-edit-user">
          <button onClick={() => setIsOpen(!isOpen)} className="btn-dropdown1">
            Selecione o Usuário
            <img src={dropdown} alt="" className="seta-dropdown" />
            <img src={dropdown_white} alt="" className="seta-dropdown_white" />
          </button>
          {/* Lista de itens do dropdown, renderizada apenas se o dropdown estiver aberto */}
          {isOpen && (
            <div className="itens-lista1">
              <ul>
                {users.map((user, index) => (
                  <li key={index} onClick={() => handleUserSelect(user)}>
                    {user.name}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <form className="form-edit-user">
        <div className="inputs">
          <label htmlFor="" className="labels">
            Nome:{" "}
          </label>
          <input
            type="text"
            placeholder="Nome e Sobrenome"
            value={nomeInput}
            ref={nameRef}
            onChange={(e) => setNomeInput(e.target.value)}
          />
        </div>
        <div className="inputs">
          <label htmlFor="" className="labels">
            E-mail:{" "}
          </label>
          <input
            type="text"
            placeholder="usuario@visiona.com.br"
            value={emailInput}
            ref={emailRef}
            onChange={(e) => setEmailInput(e.target.value)}
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
          <div className="inputs">
            <label htmlFor="" className="labels">
              Password: (Obrigatorio passar a senha){" "}
            </label>
            <input
              type="password"
              value={passwordInput}
              ref={passwordRef}
              onChange={(e) => setPasswordInput(e.target.value)}
            />
          </div>
        </div>

        <div className="btnsubmit">
          <button
            onClick={async (e: FormEvent) => {
              e.preventDefault();
              await handleSubmit();
            }}
          >
            Confirmar
          </button>
        </div>
      </form>
    </m.div>
  );
}
