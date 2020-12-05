import request from 'supertest'
import app from '../../../server'

describe('Create a Expense', () => {
  it('Should create a expense on endpoint', async () => {
    const response = await request(app)
      .post('/expenses')
      .send({title: 'Padaria', description: 'Cafe na Padaria', tag: 'comida', value: 5.5})

    expect(response).toEqual({
      id: 1,
      title: 'Padaria',
      description: 'Cafe na Padaria',
      tag: 'comida',
      value: 5.5
    })
  })
})