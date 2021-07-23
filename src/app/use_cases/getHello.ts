import { IHelloRequest, IHelloResponse } from '@app/types'

export default async (body: IHelloRequest): Promise<IHelloResponse> => {
  const { name } = body

  const helloName: IHelloResponse = {
    greetings: 'Hello ' + name
  }

  return helloName
}
