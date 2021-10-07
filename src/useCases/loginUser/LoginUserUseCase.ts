import { createConnection } from '../../infra/postgres'
import { LoginUserDTO } from './LoginUserDTO'
import { setRedis } from '../../infra/redis'
import auth from '../../config/auth'

import CryptoJS, { AES } from 'crypto-js'
import { sign } from 'jsonwebtoken'

export class LoginUserUseCase {
  async execute({ username, password }: LoginUserDTO): Promise<string> {
    const clientConnection = await createConnection()

    const { rows } = await clientConnection.query(
      'SELECT * FROM users WHERE username = $1 LIMIT 1',
      [username]
    )

    const user = rows[0]

    if (!user) throw new Error('This username does not exist.')

    const userPassword = AES.decrypt(
      user.password,
      process.env.SECRET_HASH_KEY
    ).toString(CryptoJS.enc.Utf8)

    const passwordMatch = userPassword === password

    if (!passwordMatch) throw new Error('Password is wrong.')

    const { secret, expiresIn } = auth.jwt
    const token = sign({ username: user.username }, secret, {
      subject: user.id,
      expiresIn
    })

    await setRedis(`user-${user.id}`, JSON.stringify(user))

    return token
  }
}
