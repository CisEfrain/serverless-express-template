/* eslint-disable no-unused-vars */
import dotenv from 'dotenv'
import http from 'http'
import app from './app'

const env = process.env.NODE_ENV || 'local'
const PORT = process.env.PORT || 3000
// eslint-disable-next-line no-unused-expressions
const envConfig = dotenv.config({ path: `./env/${env}` }).parsed

export const server = http.createServer(app)
server.listen(PORT, () => {
  console.log(`Server running at port ${PORT} in ${env}`)
})
