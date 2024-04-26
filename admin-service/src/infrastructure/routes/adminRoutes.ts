import {Router} from 'express'
import { IDependencies } from '../../application/interfaces/IDependancies'
import { controllers } from '../../presentation/controller'


export const adminRouter = (dependancies: IDependencies) => {
    const {login,addUser} = controllers(dependancies)

    const router = Router()

    router.route('/admin-login').post(login)
    router.route('/add-user').post(addUser)

    return router
}