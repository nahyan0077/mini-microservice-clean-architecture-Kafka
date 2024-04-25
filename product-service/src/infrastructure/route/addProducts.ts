import {Router} from 'express'
import {IDependencies} from '../../application/interfaces/IDependencies'
import {controllers} from '../../presentation/controller'

export const addProduct = (dependencies: IDependencies ) => {
    const { addProduct } = controllers(dependencies)
    const router = Router()

    router.route('/addproduct').post(addProduct)
    
    return router
}
