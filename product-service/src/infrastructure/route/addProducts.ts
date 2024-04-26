import {Router} from 'express'
import {IDependencies} from '../../application/interfaces/IDependencies'
import {controllers} from '../../presentation/controller'
import { listProduct } from '../database/mongodb/repositories'

export const addProduct = (dependencies: IDependencies ) => {
    const { addProduct } = controllers(dependencies)
    const router = Router()

    router.route('/addproduct').post(addProduct)

    router.route('/listproduct').get(listProduct)
    
    return router
}
