import Joi from 'joi'

export default async (data: any): Promise<any> => {
  const schema = Joi.object().keys({
    name: Joi.string().required()
  })

  return Joi.assert(data, schema)
}
