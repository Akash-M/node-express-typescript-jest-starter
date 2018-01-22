import * as express from 'express'
import index from './controllers/home'
import postMail from './controllers/mailer'

class App {
  public express

  constructor () {
    this.express = express()
    this.mountRoutes()
  }

  private mountRoutes (): void {
    this.express.get('/', index)
    this.express.post('/mailer', postMail)
  }
}

export default new App().express
