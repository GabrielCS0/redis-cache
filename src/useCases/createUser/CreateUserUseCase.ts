import { createConnection } from '../../database/postgres'
import { CretaeUserDTO } from './CreateUserDTO'

import { v4 as uuid } from 'uuid'
import { AES } from 'crypto-js'

type UserResponse = {
  id: string
  username: string
  name: string
}

export class CreateUserUseCase {
  async execute({
    username,
    name,
    password
  }: CretaeUserDTO): Promise<UserResponse> {
    const clientConnection = await createConnection()

    const { rows } = await clientConnection.query(
      'SELECT * FROM users WHERE username = $1 LIMIT 1',
      [username]
    )

    const userExists = rows[0]

    if (userExists) throw new Error('User already exists!')

    const hashedPassword = AES.encrypt(
      password,
      process.env.SECRET_HASH_KEY
    ).toString()

    const id = uuid()

    const user = await clientConnection.query(
      `INSERT INTO users(id, name, username, password) VALUES($1, $2, $3, $4)
        RETURNING id, name, username`,
      [id, name, username, hashedPassword]
    )

    return user.rows[0]
  }
}
