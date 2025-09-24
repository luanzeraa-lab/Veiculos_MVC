const express = require('express')
const app = express()
const port = 3000
const veiculosRoute = require('./routes/VeiculosRoute');

app.use(express.json())

app.set('view engine', 'ejs');
app.set('views', './views')

app.use('/veiculos',veiculosRoute)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
