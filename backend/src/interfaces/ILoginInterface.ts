export interface ILoginInterface {
    id?: string;
    role?: string;
    email: string;
    password: string;
    authenticate?: Promise<string | null>;
}