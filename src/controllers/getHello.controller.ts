import { getHello } from '@app/use_cases'
import { Request as ReqExpress, Response as ResExpress } from 'express'
import { Response as ResponseHandler, helloValidate } from '@helpers'

export default async (req: ReqExpress, res: ResExpress): Promise<ResExpress> => {
  const Response = new ResponseHandler()
  try {
    await helloValidate(req.body)

    const greeting = await getHello(req.body)

    const response = Response.success(greeting)
    return res.status(response.statusCode).json(response)
  } catch (error) {
    const codeError = error.isJoi ? 'INVALID_BODY' : 'UNCAUGHT_EXCEPTION'
    const errorRes = Response.error(codeError, error)
    return res.status(errorRes.statusCode).json(errorRes)
  }
}
