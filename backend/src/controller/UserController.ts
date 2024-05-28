import {Request, Response} from 'express';
import { userService } from '../services/UserService';
const createUser = async ( req: Request, res: Response ) => {
    const { id } = req.params;
    const { name, email, password, role } = req.body;

    try {
        
        const result = await userService.createUser({name, email, password, role}, id);

        if(result === true) {
            return res.status(200).json({message: "Usuário criado com sucesso"});

        } else if(typeof result === "string") {
            res.status(201).json({message: result});

        } else {
            res.status(500).json({message: "Ocorreu um erro no interno."});

        };

    } catch (error) {
        res.status(500).json({ message: "Ocorreu um erro na chamda, contate um administrador." });
    };

};

const getAllUsers = async (req: Request, res: Response) => {
    const {id} = req.params;

    try {
        
        const response = await userService.getAllUSers(id);
        return res.status(200).json(response);

    } catch (error) {
        res.status(403).json("Você não tem acesso, procure seu gestor!");
    };

};

const getUserById = async (req: Request, res: Response) => {
    const {id} = req.params;
    try {
        
        const user = await userService.getUserById(id);

        return res.status(200).json({message: user});

    } catch (error) {
        throw new Error('Erro interno, contate um administrador');
    };

};

const updateUserById = async (req: Request, res: Response) => {
    const {name, email, role, password} = req.body;
    const {id} = req.params;

    try {
        
        const userUpdate = await userService.updateUserById({name, email, role, password, id});
        return res.status(200).json({message: userUpdate});

    } catch (error) {
      throw new Error(`Ocorreu um erro ao atualizar o usuário: ${email}.`)  
    };

};

const desativarUserById = async (req: Request, res: Response) => {
    const {id} = req.params;
    const {idUserDeleted} = req.body

    try {
        
        const user = await userService.desativarUserById(id, idUserDeleted);

        return res.status(200).json({message: user});

    } catch (error) {
        throw new Error(`Erro ao tentar desativar: ${error}. Procure um administrador!`);
    };

};

const reativarUserById = async (req: Request, res: Response) => {
    const {id} = req.params;
    const {idUserReativado} = req.body

    try {
        
        const user = await userService.reativarUserById(id, idUserReativado);

        return res.status(200).json({message: user});

    } catch (error) {
        throw new Error(`Erro ao tentar reativar: ${error}. Procure um administrador!`);
    };

};

const changePassword = async (req: Request, res: Response) => {

    const {id} = req.params;
    const { new_password } = req.body;

    try {
        
        await userService.changePassword(new_password, id);

        return res.status(200).json('Senha atualizada com sucesso!')

    } catch (error) {
        throw new Error(`Erro ao tentar atualizar a senha: ${error}. Procure um administrador!`);
    };

};
export const userController = {
    createUser,
    getAllUsers,
    getUserById,
    updateUserById,
    desativarUserById,
    reativarUserById,
    changePassword,
};