import ExpenseController from '../expenses/controller/ExpenseController'
import {Router} from 'express'

const expenseRouter = Router()

const expense = new ExpenseController()

expenseRouter.post('/', expense.store)

export default expenseRouter
