import request from 'supertest'
import app, { server } from '../restAPI'

describe('Account API', () => {
  afterAll(async () => {
    server.close()
  })

  describe('Create new account', () => {
    it('should create a new account', async () => {
      const newAccount = {
        name: 'Jane Smith',
        address: '456 Elm St',
        phone: '987-654-3210',
        email: 'jane.smith@example.com',
      }

      const response = await request(app).post('/accounts').send(newAccount)

      expect(response.status).toBe(200)
      expect(response.body).toMatchObject(newAccount)
    })

    it('should return an error for an invalid email', async () => {
      const newAccount = {
        name: 'John Doe',
        address: '123 Main St',
        phone: '123-456-7890',
        email: 'invalid.email',
      }

      const response = await request(app).post('/accounts').send(newAccount)

      expect(response.status).toBe(400)
      expect(response.body).toHaveProperty('message', 'Invalid email address.')
    })
  })

  describe('Update account', () => {
    it('should update an existing account', async () => {
      const newAccount = {
        name: 'John Doe',
        address: '123 Main St',
        phone: '123-456-7890',
        email: 'john.doe@example.com',
      }

      const response = await request(app).post('/accounts').send(newAccount)
      const accountToUpdate = response.body

      const updatedFields = {
        phone: '111-222-3333',
      }

      const updatedAccount = { ...accountToUpdate, ...updatedFields }

      const updatedResponse = await request(app).put(`/accounts/${accountToUpdate.id}`).send(updatedFields)

      expect(updatedResponse.status).toBe(200)
      expect(updatedResponse.body).toMatchObject(updatedAccount)
    })

    it('should return an error for updating a non-existing account', async () => {
      const nonExistingAccountId = 9999
      const updatedFields = {
        phone: '111-222-3333',
      }

      const updatedResponse = await request(app).put(`/accounts/${nonExistingAccountId}`).send(updatedFields)

      expect(updatedResponse.status).toBe(404)
      expect(updatedResponse.body).toHaveProperty('message', 'Account not found.')
    })
  })

  describe('Delete account', () => {
    it('should delete an existing account', async () => {
      const newAccount = {
        name: 'John Doe',
        address: '123 Main St',
        phone: '123-456-7890',
        email: 'john.doe@example.com',
      }

      const response = await request(app).post('/accounts').send(newAccount)
      const accountToDelete = response.body

      const deleteResponse = await request(app).delete(`/accounts/${accountToDelete.id}`)

      expect(deleteResponse.status).toBe(200)
      expect(deleteResponse.body).toHaveProperty('message', 'Account deleted')
    })

    it('should return an error for deleting a non-existing account', async () => {
      const nonExistingAccountId = 9999

      const deleteResponse = await request(app).delete(`/accounts/${nonExistingAccountId}`)

      expect(deleteResponse.status).toBe(404)
      expect(deleteResponse.body).toHaveProperty('message', 'Account not found.')
    })
  })

  describe('Get account', () => {
    it('should return an existing account', async () => {
      const newAccount = {
        name: 'John Doe',
        address: '123 Main St',
        phone: '123-456-7890',
        email: 'john.doe@example.com',
      }

      const response = await request(app).post('/accounts').send(newAccount)
      const accountToGet = response.body

      const getResponse = await request(app).get(`/accounts/${accountToGet.id}`)

      expect(getResponse.status).toBe(200)
      expect(getResponse.body).toMatchObject(accountToGet)
    })

    it('should return an error for a non-existing account', async () => {
      const nonExistingAccountId = 9999

      const getResponse = await request(app).get(`/accounts/${nonExistingAccountId}`)

      expect(getResponse.status).toBe(404)
      expect(getResponse.body).toHaveProperty('message', 'Account not found')
    })
  })
})
