import axios from 'axios'

describe('GET /health', () => {
  it('should provide the server health status', async () => {
    const response = await axios.get('http://localhost:3000/health')

    expect(response.status).toEqual(200)
    expect(response.data).toEqual({status: 'UP'})
  })
})
