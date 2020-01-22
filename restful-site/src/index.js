const express = require('express')
const request = require('request-promise-native')
const app = express()



app.get('/products', async (req, res) => {
    const result = await request.get('http://localhost:3000/api/v1/products')
    console.log(JSON.parse(result))
    res.send('Hello World !!')
})

app.listen(3001, () => {
    console.log('servidor iniciado na porta 3001')
})