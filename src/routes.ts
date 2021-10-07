import { Router } from 'express'
import { ensureAuthenticate } from './middlewares/ensureAuthenticated'

import { CreateUserController } from './useCases/createUser/CreateUserController'
import { GetUserDataController } from './useCases/getUserData/GetUserDataController'
import { LoginUserController } from './useCases/loginUser/LoginUserControlller'

const router = Router()

const createUserController = new CreateUserController()
const loginUserController = new LoginUserController()
const getUserDataController = new GetUserDataController()

router.post('/users', createUserController.handle)
router.post('/users/login', loginUserController.handle)
router.get('/users', ensureAuthenticate, getUserDataController.handle)

export { router }
