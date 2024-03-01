interface Account {
  id: number
  name: string
  address?: string
  phone?: string
  email?: string
}

interface AccountInput {
  name: string
  address?: string
  phone?: string
  email?: string
}

class AccountManagementAPI {
  private accounts: Account[] = []

  createAccount(accountInput: AccountInput): Account {
    this.validateAccountInput(accountInput)

    const newAccount = { ...accountInput, id: this.accounts.length + 1 }
    this.accounts.push(newAccount)
    return newAccount
  }

  updateAccount(accountId: number, updatedFields: Partial<AccountInput>): Account {
    const accountIndex = this.accounts.findIndex((acc) => acc.id === accountId)

    if (accountIndex === -1) {
      throw new Error('Account not found.')
    }

    const updatedAccount = { ...this.accounts[accountIndex], ...updatedFields }

    this.validateAccountInput(updatedAccount)

    this.accounts[accountIndex] = updatedAccount
    return updatedAccount
  }

  deleteAccount(accountId: number): boolean {
    const accountIndex = this.accounts.findIndex((acc) => acc.id === accountId)

    if (accountIndex === -1) {
      throw new Error('Account not found.')
    }

    this.accounts.splice(accountIndex, 1)
    return true
  }

  getAccount(accountId: number): Account | null {
    const account = this.accounts.find((acc) => acc.id === accountId)
    return account ? { ...account } : null
  }

  private validateAccountInput(accountInput: AccountInput): void {
    if (!accountInput.name || accountInput.name.trim() === '') {
      throw new Error('Name is required.')
    }

    if (accountInput.email && !this.isValidEmail(accountInput.email)) {
      throw new Error('Invalid email address.')
    }
  }

  private isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }
}

export default AccountManagementAPI
export type { Account, AccountInput }
