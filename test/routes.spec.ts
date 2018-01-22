import * as supertest from 'supertest'
import app from '../src/App'

describe('test app routes', () => {
  it('works', () =>
    supertest(app)
      .get('/')
      .expect('Content-Type', /json/)
      .expect(200)
    )
});