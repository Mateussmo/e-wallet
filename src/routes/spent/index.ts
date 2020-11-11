import ExpenseController from '../spent/controller/ExpenseController'
import {Router} from 'express'

const spentRouter = Router()

const expense = new ExpenseController()

spentRouter.post('/create', expense.store)

export default spentRouter
