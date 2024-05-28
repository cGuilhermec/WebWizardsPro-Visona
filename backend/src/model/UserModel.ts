import { createConection } from "../../database/connection";
import { IUserInterface } from "../interfaces/IUserInterface";
import { IUserUpdateInterface } from "../interfaces/IUserUpdateInterface";


const createUser = async (user: IUserInterface): Promise<void> => {

    const client = await createConection();

    await client.query(
        'INSERT INTO users (name, email, password, role) VALUES ($1, $2, $3, $4)', [user.name, user.email, user.password, user.role]
    );

};

const getUserByEmail = async ( email: string ) => {

    const client = await createConection();

    const user = await client.query(
        'SELECT id, name, password, email, role, is_deleted FROM users WHERE email = $1', [email]
    );

    return user.rows[0];

};

const getUserRoleById = async (id: string) => {

    const client = await createConection();

    const RoleUser = await client.query(
        'SELECT role FROM users WHERE id = $1', [id]
    );

    return RoleUser.rows[0].role;

};

const getAllUSers = async () => {

    const client = await createConection();

    const allUser = await client.query(
        'SELECT id, name, email, role FROM users WHERE is_deleted = false'
    );

    return allUser.rows;

};

const getUserById = async (id: string) => {

    const client = await createConection();

    const user = await client.query(
        'SELECT id, name, email, role FROM users WHERE id = $1', [id]
    );

    return user.rows;

};

const updateUserById = async (user: IUserUpdateInterface) => {

    const client = await createConection();

    const userUpdated = await client.query(
        'UPDATE users SET name = $1, email = $2, role = $3, password = $4 WHERE id = $5', [user.name, user.email, user.role, user.password, user.id]
    );

    return userUpdated.rows;

};

const desativarUserById = async (id: string) => {

    const client = await createConection();

    const userDeleted = await client.query(
        'UPDATE users SET is_deleted = true Where id = $1', [id]
    );

    return userDeleted.rows;

};

const reativarUserById = async (id: string) => {

    const client = await createConection();

    const userReativado = await client.query(
        'UPDATE users SET is_deleted = false Where id = $1', [id]
    );

    return userReativado.rows;

};

const changePassword = async (new_password: string, id: string): Promise<void> => {

    const client = await createConection();

    await client.query(
        'UPDATE users SET password = $1 WHERE id = $2', [new_password, id]
    );

}

export const userModel = {
    createUser,
    getUserByEmail,
    getUserRoleById,
    getAllUSers,
    getUserById,
    updateUserById,
    desativarUserById,
    reativarUserById,
    changePassword
};