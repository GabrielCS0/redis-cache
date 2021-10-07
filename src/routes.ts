import { Router } from 'express'

import { CreateUserController } from './useCases/createUser/CreateUserController'
import { LoginUserController } from './useCases/loginUser/LoginUserControlller'

const router = Router()

const createUserController = new CreateUserController()
const loginUserController = new LoginUserController()

router.post('/users', createUserController.handle)
router.post('/users/login', loginUserController.handle)

export { router }
