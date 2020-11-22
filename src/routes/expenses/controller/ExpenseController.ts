import CreateExpenseService from '../services/CreateExpenseService'
import {Request, Response} from 'express'

class ExpensesController {
  store(request: Request, response: Response): Response {
    const {title, description, tag, value} = request.body

    const createExpense = new CreateExpenseService()

    const expense = createExpense.execute({
      title,
      description,
      tag,
      value
    })

    return response.status(201).json(expense)
  }
}

export default ExpensesController
