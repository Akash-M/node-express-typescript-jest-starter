import { Request, Response } from 'express'

/**
 * GET /
 * Home.
 */
const index = (req: Request, res: Response) => {
  res.json({
    message: 'Working!'
  })
}

export default index
