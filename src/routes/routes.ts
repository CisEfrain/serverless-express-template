import { Router } from 'express'

import { getHelloControllers } from '@controllers'

const RouterInstance = Router()

RouterInstance.route('/hello').post(getHelloControllers)

export default RouterInstance
