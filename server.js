const app = require('./app')

var port = 3000;
var address = '127.0.0.1';

const server = app.listen(port,address,() => {
    console.log(`Server running at: ${address}:${port}`)
})

