import { Schema } from "mongoose";
import { insertUser } from "../../database/mongoDB/repositories/user"; 
import {IUserRequestEntity} from '../../../domain/entities/userEntity'


export default async (data: IUserRequestEntity )=>{
    try {
        console.log("🚀 ~ file: userCreatedConsumers.ts:17 ~ _id:", data)

        await insertUser(data)

    } catch (error:any) {
        
        throw new Error(error?.message)
    }     
}

