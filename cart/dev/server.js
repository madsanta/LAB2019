const path = require('path')
const express = require('express')
const chalk = require('chalk')

const app = express()

app.use('/', express.static(path.join(__dirname, '..')))

app.listen(9999)

console.log('Server started at: ' + chalk.cyan('http://localhost:9999/'))
