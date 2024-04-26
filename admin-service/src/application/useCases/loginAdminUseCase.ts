import { AdminLoginRequest } from "../../domain/entities";
import { IDependencies } from "../interfaces/IDependancies";


export const loginAdminUseCase = (dependancies: IDependencies) =>{
    const {repositories: {login} } = dependancies
    return {
        execute : async ( data: AdminLoginRequest ) => {
            try {
                return await login(data)
            } catch (error: any) {
                throw new Error(error?.message)
            }
        }
    }
}