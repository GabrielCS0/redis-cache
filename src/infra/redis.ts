import Redis from 'ioredis'

const redisClient = new Redis({
  password: process.env.REDIS_PASS,
  port: process.env.REDIS_PORT
})

export { redisClient }
