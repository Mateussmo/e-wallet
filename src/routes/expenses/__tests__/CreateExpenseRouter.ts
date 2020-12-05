import request from 'supertest'
import app from '../../../server'

describe('Create a Expense', () => {
  it('Should create a expense on endpoint', async () => {
    const expense = {
      title: 'Padaria',
      description: 'Cafe na Padaria',
      tag: 'comida',
      value: 5.5
    }

    const response = await request(app).post('/expenses').send(expense)

    expect(response).toEqual(expense)

    expect(response).toEqual(expect.any(Number))
  })
})
