const productHandler = require('./handlers/product')

module.exports = [
    {
        method: 'GET',
        path: '/products',
        handler: productHandler.getAll
    },
     {
         method: 'POST',
         path: '/products',
         handler: productHandler.save
     }
]