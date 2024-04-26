import {AddUserUseCase, loginAdminUseCase} from '../../domain/useCaseInterfaces'
import { IDependencies } from './IDependancies'


export interface IUseCases {
    loginAdminUseCase: (dependancies: IDependencies) => loginAdminUseCase
    AddUserUseCase: (depenedancies: IDependencies) => AddUserUseCase
}