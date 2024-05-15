import { Request, Response } from 'express';
import { ILoginInterface } from '../interfaces/ILoginInterface';
import { LoginService } from '../services/LoginService';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const SECRET_KEY = process.env.SECRET_KEY || '';

export const loginUser = async (req: Request, res: Response) => {
    const {email, password} = req.body;

    try {
        
        if(!email || !password){
            return res.status(400).json({message: 'Email e senha são obrigatórios.'});
        };

        const user: ILoginInterface = { email, password };

        const token = await LoginService.authenticate(user);


        if(token) {

            //Se o usuário for autenticado com sucesso, enviamos a resposta com o token
            const decodedToken: any = jwt.verify(token, SECRET_KEY);
            const role = decodedToken.role;
            const userId = decodedToken.id;
            const name = decodedToken.name;

            res.status(200).json({ message: 'Usuário autenticado com sucesso!', token, user: user.email, role, userId, name });

        } else {
            res.status(400).json({ message: 'Credenciais inválidas!' });
        };

    } catch (error) {
       res.status(400).json({ message: 'Erro ao autenticar o usuário: ' + error });
    };

};