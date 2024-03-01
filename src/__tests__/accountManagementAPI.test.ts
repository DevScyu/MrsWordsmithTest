import AccountManagementAPI, { AccountInput } from '../accountManagementAPI'

describe('AccountManagementAPI', () => {
  let accountAPI: AccountManagementAPI

  beforeEach(() => {
    accountAPI = new AccountManagementAPI()
  })

  describe('createAccount', () => {
    test('should create a new account', () => {
      const accountInput = { name: 'John Doe' }
      const account = accountAPI.createAccount(accountInput)

      expect(account).toHaveProperty('id')
      expect(account).toHaveProperty('name', 'John Doe')
    })

    test('should throw an error if name is missing', () => {
      const accountInput = {} as AccountInput

      expect(() => accountAPI.createAccount(accountInput)).toThrow('Name is required.')
    })

    test('should throw an error if email is invalid', () => {
      const accountInput = { name: 'John Doe', email: 'invalid-email' }

      expect(() => accountAPI.createAccount(accountInput)).toThrow('Invalid email address.')
    })
  })

  describe('updateAccount', () => {
    test('should update an existing account', () => {
      const accountInput = { name: 'John Doe' }
      const account = accountAPI.createAccount(accountInput)
      const updatedAccount = accountAPI.updateAccount(account.id, { address: '123 Main St' })

      expect(updatedAccount).toHaveProperty('address', '123 Main St')
    })

    test('should throw an error if account does not exist', () => {
      expect(() => accountAPI.updateAccount(100, {})).toThrow('Account not found.')
    })

    test('should throw an error if email is invalid', () => {
      const accountInput = { name: 'John Doe' }
      const account = accountAPI.createAccount(accountInput)

      expect(() => accountAPI.updateAccount(account.id, { email: 'invalid-email' })).toThrow('Invalid email address.')
    })
  })

  describe('deleteAccount', () => {
    test('should delete an existing account', () => {
      const accountInput = { name: 'John Doe' }
      const account = accountAPI.createAccount(accountInput)

      expect(accountAPI.deleteAccount(account.id)).toBe(true)
      expect(accountAPI.getAccount(account.id)).toBeNull()
    })

    test('should throw an error if account does not exist', () => {
      expect(() => accountAPI.deleteAccount(100)).toThrow('Account not found.')
    })
  })

  describe('getAccount', () => {
    test('should get account information', () => {
      const accountInput = { name: 'John Doe' }
      const account = accountAPI.createAccount(accountInput)

      expect(accountAPI.getAccount(account.id)).toEqual(account)
    })

    test('should return null if account does not exist', () => {
      expect(accountAPI.getAccount(100)).toBeNull()
    })
  })
})
