import Redis from 'ioredis'
import { promisify } from 'util'

const redisClient = new Redis({
  password: process.env.REDIS_PASS,
  port: process.env.REDIS_PORT
})

function getRedis(key: string): Promise<string> {
  const syncRedisGet = promisify(redisClient.get).bind(redisClient)
  return syncRedisGet(key)
}

function setRedis(key: string, value: string): Promise<Redis.Commands> {
  const syncRedisSet = promisify(redisClient.set).bind(redisClient)
  return syncRedisSet(key, value)
}

export { redisClient, getRedis, setRedis }
