import React, { useState, useEffect, useRef } from 'react';
// @ts-ignore
import dropdown from "../../images/registerEditUser/dropdown.png";
// @ts-ignore
import dropdown_white from "../../images/registerEditUser/dropdown_white.png";

interface User {
    nome: string;
    email: string;
    role: string;
  }

export default function EditarUsuario(){
    // Estado para controlar se o dropdown está aberto ou fechado
    const [isOpen, setIsOpen] = useState(false);
    // Estado para os itens do dropdown
    const [users, setUsers] = useState<User[]>([
        { nome: 'Gustavo Carvalho', email: 'gustavocarvalho@gmail.com', role: 'adm' },
        { nome: 'Guilherme Carvalho', email: 'guilherme@gmail.com', role: 'editor' },
        { nome: 'Henrique Melo', email: 'henrique@visiona.com', role: 'revisor' },
        { nome: 'Caio Azevedo', email: 'caio@visiona.com', role: 'revisor' },
        { nome: 'OLAOLA OLA', email: 'olaola@visiona.com', role: 'editor' }
    ]);
    // Estado para o usuário selecionado
    const [selectedUser, setSelectedUser] = useState<User | null>(null);
    // Estados para os campos de alteração
    const [nomeInput, setNomeInput] = useState('');
    const [emailInput, setEmailInput] = useState('');
    const [roleInput, setRoleInput] = useState('');
    // Referência para o elemento do botão dropdown
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Efeito para adicionar ouvinte de eventos para fechar o dropdown quando clicado fora dele
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
        }

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
        document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // Função para lidar com a seleção de um usuário
    const handleUserSelect = (user: User) => {
        setSelectedUser(user);
        setNomeInput(user.nome);
        setEmailInput(user.email);
        setRoleInput(user.role);
        setIsOpen(false); // Fecha o dropdown após selecionar um usuário
    };

    // Função para lidar com o envio das alterações
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (selectedUser) {
        const updatedUsers = users.map((user) =>
            user === selectedUser ? { ...user, nome: nomeInput, email: emailInput, role: roleInput } : user
        );
        setUsers(updatedUsers);
        // Atualiza o usuário selecionado com as informações alteradas
        setSelectedUser({ ...selectedUser, nome: nomeInput, email: emailInput, role: roleInput });
        
        // Limpa os inputs
        setNomeInput('');
        setEmailInput('');
        setRoleInput('');

        }
    };

    console.log(users);

    return(
        <div ref={dropdownRef} className="container-data-2 ">
            <div className="container-dropdown-user">
                <div className="dropdown-edit-user">
                    <button onClick={() => setIsOpen(!isOpen)} className='btn-dropdown1'>
                        Selecione o Usuário
                        <img src={dropdown} alt="" className='seta-dropdown'/>
                        <img src={dropdown_white} alt="" className='seta-dropdown_white'/>
                    </button>
                    {/* Lista de itens do dropdown, renderizada apenas se o dropdown estiver aberto */}
                    {isOpen && (
                    <div className="itens-lista1">
                        <ul>
                            {users.map((user, index) => (
                            <li key={index} onClick={() => handleUserSelect(user)}>
                                {user.nome}
                            </li>
                            ))}
                        </ul>
                    </div>
                    )}
                </div>
            </div>

            <form onSubmit={handleSubmit} className='form-edit-user'>
                <div className="inputs">
                    <label htmlFor="" className="labels">Nome: </label>
                    <input type="text" placeholder="Nome e Sobrenome"
                    value={nomeInput} onChange={(e) => setNomeInput(e.target.value)}/>
                </div>
                
                <div className="inputs" >
                    <label htmlFor="" className="labels">E-mail: </label>
                    <input type="text" placeholder="usuario@visiona.com.br"
                    value={emailInput} onChange={(e) => setEmailInput(e.target.value)}/>
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
        </div>
    );
}