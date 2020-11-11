import {Router} from 'express'
import {healthRouter} from './health'
import {helloRouter} from './hello'
import spentRouter from './spent'

const router = Router()

// Wire up routers
router.use('/', helloRouter)
router.use('/health', healthRouter)
router.use('/spent', spentRouter)

// Export the router
export default router
