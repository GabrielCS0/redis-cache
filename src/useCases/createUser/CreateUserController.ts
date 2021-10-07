import { CreateUserUseCase } from './CreateUserUseCase'
import { Request, Response } from 'express'

export class CreateUserController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { username, name, password } = req.body

    const createUserUseCase = new CreateUserUseCase()

    try {
      const user = await createUserUseCase.execute({ username, name, password })

      return res.status(201).json(user)
    } catch (error) {
      return res.status(400).json({
        status: 'error',
        message: error.message
      })
    }
  }
}
