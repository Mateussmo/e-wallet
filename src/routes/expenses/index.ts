import ExpenseController from '../expenses/controller/ExpenseController'
import {Router} from 'express'

const expenseRouter = Router()

const expenseController = new ExpenseController()

expenseRouter.post('/', expenseController.store)

export default expenseRouter
