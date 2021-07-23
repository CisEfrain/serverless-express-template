import winston from 'winston'

const log: any = {}

const enumerateErrorFormat = winston.format((info: any) => {
  const transformed: any = {}
  info.meta = info.meta ? info.meta : {}
  transformed.message = info.message
  transformed.level = info.level
  if (info.meta) transformed.fields = info.meta
  if (info.error) transformed.error = info.error.stack !== null && info.error.stack !== undefined ? info.error.stack : info.error
  return transformed
})

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console({
      level: 'debug',
      format: winston.format.combine(
        winston.format.errors({ stack: true }),
        winston.format.timestamp(),
        enumerateErrorFormat(),
        winston.format.json()
      )
    })
  ]
})

log.error = (messsage: any, error: any, meta: any): any => {
  logger.error(messsage, { error, meta })
}

log.info = (message: string, meta: any): any => logger.info(message, meta)
log.verbose = (message: string, meta: any): any => logger.verbose(message, meta)
log.debug = (message: string, meta: any): any => logger.debug(message, meta)
log.warn = (message: string, meta: any): any => logger.warn(message, meta)

export default log
