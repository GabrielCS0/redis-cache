declare namespace NodeJS {
  export interface ProcessEnv {
    POSTGRES_DB: string
    POSTGRES_HOST: string
    POSTGRES_USER: string
    POSTGRES_PASS: string
    POSTGRES_PORT: number
  }
}
