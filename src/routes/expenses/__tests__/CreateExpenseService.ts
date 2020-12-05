import CreateExpenseService from '../services/CreateExpenseService'

describe('Create a Expense', () => {
  it('Should create a expense', async () => {
    const createExpense = new CreateExpenseService()

    const expense = {
      title: 'Padaria',
      description: 'Cafe na Padaria',
      tag: 'comida',
      value: 5.5
    }

    const response = createExpense.execute(expense)

    expect(response).toEqual(expense)

    expect(typeof response.id).toBe('number')
  })
})
