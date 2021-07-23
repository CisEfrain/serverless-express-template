
import express from 'express'
import helmet from 'helmet'
import { routes } from '@routes'
import { unknownRoutesMiddleware } from '@middlewares'

const app = express()

app.use(express.json())
app.use(helmet.hidePoweredBy())

app.use('/', routes)
app.use('/*', unknownRoutesMiddleware)

export default app
