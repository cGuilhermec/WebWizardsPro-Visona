import { SignInProps } from "./ISignInProps";
import { User } from "./IUser";

export interface AuthContextType {
    user: User | null,
    Signed: boolean,
    role?: string,
    SignIn: ({ email, password }: SignInProps ) => Promise<void>,
    signOut: () => void;
}