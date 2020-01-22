const express = require('express')
const request = require('request-promise-native')
const app = express()

app.set('view engine', 'ejs')
app.set('views', './src/views')


app.get('/products', async (req, res) => {
    const result = await request.get('http://localhost:3000/api/v1/products')
    const products = JSON.parse(result)
    res.render('products', {products})
})

app.listen(3001, () => {
    console.log('servidor iniciado na porta 3001')
})