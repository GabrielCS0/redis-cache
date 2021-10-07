import { getRedis } from '../../infra/redis'

type UserResponse = {
  id: string
  username: string
  name: string
}

export class GetUserDataUseCase {
  async execute(userId: string): Promise<UserResponse> {
    const userRedis = await getRedis(`user-${userId}`)
    const user = JSON.parse(userRedis)

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...userData } = user

    return userData
  }
}
