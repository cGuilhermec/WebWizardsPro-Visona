import { IUserInterface } from "../interfaces/IUserInterface";
import { IUserUpdateInterface } from "../interfaces/IUserUpdateInterface";
import { userModel } from "../model/UserModel";
import { hash } from 'bcryptjs';
import fs from 'fs';


const createUser = async ( user: IUserInterface, id: string) => {

    try {
        
        const verifyIfUserExists = await userModel.getUserByEmail(user.email);

        if(verifyIfUserExists) {
            return `Email ${user.email} já cadastrado!`
        }; 

        const role = await userModel.getUserRoleById(id);

        if( role !== "adm") {
            return `Você não tem autorização para realizar cadastro, procure seu gestor!`
        };

        const hash_password = await hash(user.password, 8);
        user.password = hash_password;

        await userModel.createUser(user);

        return true;    

    } catch (error) {
        throw new Error("Erro ao criar o usuário");
    };

};

const getAllUSers = async (id: string) => {
    
    try {
        
        const role = await userModel.getUserRoleById(id);

        if(role === "adm"){
            return await userModel.getAllUSers();
        } else{
            throw new Error ("Você não tem acesso, procure seu gestor");
        };

    } catch (error) {
        throw new Error ("Erro ao obter usuários.");
    };

};

const getUserById = async (id: string) => {

    try {
        
        const userId = await userModel.getUserById(id);

        if(!userId) {
            `Usuário não existe, ou foi digitado incorretamente.`
        };

        return userId;

    } catch (error) {
        throw new Error("Erro interno, procure um administrador.")
    };

};

const updateUserById = async (user: IUserUpdateInterface) => {

    try {

        const verifyUser = await userModel.getUserById(user.id)
        
        if(verifyUser) {

            const hash_password = await hash(user.password, 8);
            user.password = hash_password;

            await userModel.updateUserById(user);

            return {success: true, message: `Usuário ${user.email} atualizado com sucesso.`};

        }else if (!verifyUser){
            return 'Usuário não encontrado.';
        };

    } catch (error) {
        throw new Error(`Erro interno: ${error}, contate um administrador.`)
    };

};

const desativarUserById = async (id: string, idUserDeleted: string) => {

    try {
        
        const verifyUser = await userModel.getUserById(idUserDeleted);
        const verifyUserRole = await userModel.getUserRoleById(id);

        if(!verifyUser) {
            return 'Usuário não encontrado.';
        };

        if(verifyUserRole === "adm") {
            await userModel.desativarUserById(idUserDeleted);

            return 'Usuário desativado com sucesso!';
        };

    } catch (error) {
        throw new Error('Erro no servidor: '+ error);
    };

};

const reativarUserById = async (id: string, idUserReativado: string) => {

    try {
        
        const verifyUser = await userModel.getUserById(idUserReativado);
        const verifyUserRole = await userModel.getUserRoleById(id);

        if(!verifyUser) {
            return 'Usuário não encontrado.';
        };

        if(verifyUserRole === "adm") {
            await userModel.reativarUserById(idUserReativado);

            return 'Usuário reativado com sucesso!';
        } else {
            'Erro: procure um administrador.';
        };

    } catch (error) {
        throw new Error('Erro no servidor: '+ error);
    };

}

const changePassword = async ( new_password: string, id: string ) => {

    const hash_new_password = await hash(new_password, 8);
    new_password = hash_new_password;
        
    await userModel.changePassword(hash_new_password, id);

};

export const userService = {
    createUser,
    getAllUSers,
    getUserById,
    updateUserById,
    desativarUserById,
    reativarUserById,
    changePassword
}