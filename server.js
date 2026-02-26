const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())

const users = [
  { login: 'CocaCola', password: 'zX123456789' }
]

app.post('/api/login', (req, res) => {
  const { login, password } = req.body
  
  const user = users.find(u => u.login === login && u.password === password)
  
  if (user) {
    res.json({ success: true, message: 'ok' })
  } else {
    res.status(401).json({ success: false, message: 'Неверный логин или пароль' })
  }
})

app.listen(3002)