import {Router} from 'express'
import {healthRouter} from './health'
import {helloRouter} from './hello'
import expenseRouter from './expenses'

const router = Router()

// Wire up routers
router.use('/', helloRouter)
router.use('/health', healthRouter)
router.use('/expenses', expenseRouter)

// Export the router
export default router
