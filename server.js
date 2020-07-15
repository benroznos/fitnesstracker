const express = require('express')
const path = require('path')

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

const router = require('./routes')
app.use('/api', router)

app.use(express.static(path.join(__dirname, '/public')))


app.get('/exercise', (req, res) => {
  res.sendFile(path.resolve(path.join(__dirname, '/public/exercise.html')))
})

app.get('/stats', (req, res) => {
  res.sendFile(path.resolve(path.join(__dirname, '/public/stats.html')))
})


require('./config')
  .then(() => app.listen(3000, () => {
    console.log(`http://localhost${process.env.PORT}/`)
  }))
  .catch(err => console.error(err))