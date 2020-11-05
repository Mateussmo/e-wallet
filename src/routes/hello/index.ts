import {Request, Response, Router} from 'express'

const helloRouter = Router()

helloRouter.get(
  '/',
  (_req: Request, res: Response): Response => {
    return res.send('Hello world!')
  }
)

export {helloRouter}
