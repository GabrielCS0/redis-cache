import { Request, Response } from 'express'
import { LoginUserUseCase } from './LoginUserUseCase'

export class LoginUserController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { username, password } = req.body

    const loginUserUseCase = new LoginUserUseCase()

    try {
      const token = await loginUserUseCase.execute({ username, password })

      return res.json({ token })
    } catch (error) {
      return res.status(401).json({
        status: 'error',
        message: error.message
      })
    }
  }
}
