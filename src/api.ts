const conta = {
  email: 'user@dio.bank',
  password: '12345',
  name: 'User'
}

export const api = new Promise((resolve) => {
  setTimeout (() => {
    resolve(conta)
  }, 3000)
})