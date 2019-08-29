const express = require('express')
const morgan = require('morgan')
const app = express();
const port = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))
app.use(require('./routes'))

app.listen(3000)