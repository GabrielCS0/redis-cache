import { Request, Response } from 'express'
import { GetUserDataUseCase } from './GetUserDataUseCase'

export class GetUserDataController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { userId } = req

    const getUserDataUseCase = new GetUserDataUseCase()

    try {
      const userData = await getUserDataUseCase.execute(userId)

      return res.json(userData)
    } catch (error) {
      return res.status(500).json({ status: 'error', message: error.message })
    }
  }
}
