import app from '@root/app'
import supertest from 'supertest'

describe('unknownRoutes test', () => {
  it('post 404', async () => {

    const res = await supertest(app)
    .post('/asds')
    expect(res.status).toEqual(404)
    expect(res.body.statusCode).toEqual(404)
  })
})
