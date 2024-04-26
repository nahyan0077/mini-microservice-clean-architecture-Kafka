import { IDependencies } from "../../application/interfaces/IDependancies";
import {loginController} from "./login"
import {addUserController} from "./UserController"

export const controllers = (dependencies:IDependencies)=>{
    return{
       login:loginController(dependencies),
       addUser:addUserController(dependencies)
    }
}