import axios from 'axios'

describe('GET /', () => {
  it('should return a hello world message', async () => {
    const response = await axios.get('http://localhost:3000/')

    expect(response.status).toEqual(200)
    expect(response.data).toEqual('Hello world!')
  })
})
