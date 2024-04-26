import { IDependencies } from "../application/interfaces/IDependancies";
import * as repositories from '../infrastructure/database/mongodb/repositories'
import * as useCases from '../application/useCases'


export const dependancies: IDependencies = {
    repositories,
    useCases
}