import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { ILoginInterface } from "../interfaces/ILoginInterface";
import { userModel } from "../model/UserModel";
import dotenv from "dotenv";

dotenv.config();

const SECRET_KEY = process.env.SECRET_KEY || '';

const authenticate = async (user: ILoginInterface): Promise<string | null> => {
        
    const userLoginAuth = await userModel.getUserByEmail(user.email);

    if(!userLoginAuth) return ('userLoginAuth: '+ null)

    const isValidPassword = await bcryptjs.compare(user.password, userLoginAuth.password);

    if(!isValidPassword) return ('isValidPassword: '+ null)

    const token = jwt.sign({ id: userLoginAuth.id, email: userLoginAuth.email, name: userLoginAuth.name, role: userLoginAuth.role }, SECRET_KEY);

    return token;

};

export const LoginService = {
    authenticate,
}