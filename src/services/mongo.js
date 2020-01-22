const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://pietro:senha123@jsrest-h4gjt.gcp.mongodb.net/test?retryWrites=true&w=majority',
    { useNewUrlParser: true },
    () => console.log('connected to db!')
);
