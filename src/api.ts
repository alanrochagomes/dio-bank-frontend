const conta = {
  email: 'user@dio.bank',
  password: '12345',
  name: 'User',
  balance: 2000.00,
  id: '1'
}

export const api = new Promise((resolve) => {
  setTimeout (() => {
    resolve(conta)
  }, 3000)
})