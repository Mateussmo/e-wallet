import CreateExpenseService from '../services/CreateExpenseService'
import {Request, Response} from 'express'

class ExpensesController {
  store(request: Request, response: Response): Response {
    const teste = request.body
    console.log(teste)

    const createExpense = new CreateExpenseService()

    const expense = createExpense.execute({
      title: 'Padaria',
      description: 'Cafe na Padaria',
      tag: 'comida',
      value: 5.5
    })
    console.log(expense)

    return response.status(201).json(expense)
  }
}

export default ExpensesController
