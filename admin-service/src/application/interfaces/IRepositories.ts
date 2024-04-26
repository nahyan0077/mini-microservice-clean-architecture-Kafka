import {AdminEntity, AdminLoginRequest, User, UserData} from '../../domain/entities'

export interface IRepositories {
    login: (data: AdminLoginRequest) => Promise < AdminEntity | null >
    addUser: (data: UserData) => Promise < User | null >
}