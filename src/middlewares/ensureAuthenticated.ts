import { NextFunction, Request, Response } from 'express'
import { verify } from 'jsonwebtoken'

interface IPayload {
  sub: string
}

export function ensureAuthenticate(
  req: Request,
  res: Response,
  next: NextFunction
): Response {
  const authHeader = req.headers.authorization

  if (!authHeader) {
    return res
      .status(401)
      .json({ status: 'error', message: 'No token provided.' })
  }

  const parts = authHeader.split(' ')

  if (parts.length !== 2) {
    return res.status(401).json({ status: 'error', message: 'Token error.' })
  }

  const [scheme, token] = parts

  if (!/^Bearer$/i.test(scheme)) {
    return res
      .status(401)
      .json({ status: 'error', message: 'Malformatted token.' })
  }

  try {
    const { sub } = verify(token, process.env.JWT_SECRET) as IPayload
    req.userId = sub
    next()
  } catch (err) {
    return res.status(401).json({ status: 'error', message: 'Token invalid.' })
  }
}
