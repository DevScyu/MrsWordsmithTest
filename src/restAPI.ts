import express, { Request, Response } from 'express'
import AccountManagementAPI, { AccountInput } from './accountManagementAPI'

const app = express()
app.use(express.json())
const accountManager = new AccountManagementAPI()

// Get account by ID
app.get('/accounts/:id', (req: Request, res: Response) => {
  const accountId = parseInt(req.params.id, 10)
  const account = accountManager.getAccount(accountId)
  if (account) {
    res.json(account)
  } else {
    res.status(404).json({ message: 'Account not found' })
  }
})

// Create new account
app.post('/accounts', (req: Request, res: Response) => {
  const accountInput: AccountInput = req.body
  try {
    const newAccount = accountManager.createAccount(accountInput)
    res.json(newAccount)
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message })
    }
  }
})

// Update existing account
app.put('/accounts/:id', (req: Request, res: Response) => {
  const accountId = parseInt(req.params.id, 10)
  const updatedFields: Partial<AccountInput> = req.body
  try {
    const updatedAccount = accountManager.updateAccount(accountId, updatedFields)
    res.json(updatedAccount)
  } catch (error) {
    if (error instanceof Error) {
      res.status(404).json({ message: error.message })
    }
  }
})

// Delete an account
app.delete('/accounts/:id', (req: Request, res: Response) => {
  const accountId = parseInt(req.params.id, 10)
  try {
    accountManager.deleteAccount(accountId)
    res.json({ message: 'Account deleted' })
  } catch (error) {
    if (error instanceof Error) {
      res.status(404).json({ message: error.message })
    }
  }
})

// Start the server
const port = 3000
const server = app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})

export default app
export { server }
