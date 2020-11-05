import {Request, Response, Router} from 'express'

const healthRouter = Router()

healthRouter.get(
  '/',
  (_req: Request, res: Response): Response => {
    return res.status(200).json({status: 'UP'})
  }
)

export {healthRouter}
