const express = require('express')
const app = express()
const routes = require('./routes/index.js')
const session = require('express-session');
const port = process.env || 3000

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))
app.use('/scripts', express.static(__dirname + '/node_modules/chart.js/dist/'));

app.use(session({
  secret: 'hacktiv8',
  resave: false,
  saveUninitialized: false,
  cookie: { 
    secure: false,
    sameSite: true
  }
}))

app.use('/',routes)


app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})