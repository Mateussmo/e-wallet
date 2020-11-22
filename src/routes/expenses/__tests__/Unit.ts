import CreateExpenseService from '../services/CreateExpenseService'

describe('Create a Expense', () => {
  it('Should create a expense', async () => {
    const createExpense = new CreateExpenseService()

    const response = createExpense.execute({
      title: 'Padaria',
      description: 'Cafe na Padaria',
      tag: 'comida',
      value: 5.5
    })

    expect(response).toEqual({
      id: 1,
      title: 'Padaria',
      description: 'Cafe na Padaria',
      tag: 'comida',
      value: 5.5
    })
  })
})
