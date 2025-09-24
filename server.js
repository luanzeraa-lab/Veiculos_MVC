const express = require('express')
const bodyParser = require("body-parser");
const app = express()
const port = 3000
const veiculosRoute = require('./routes/VeiculosRoute');

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.set('views', './views')

app.use('/veiculos',veiculosRoute)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
