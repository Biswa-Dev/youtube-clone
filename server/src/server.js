const http = require('http');
require('dotenv').config();
const app = require('./app');

const PORT = process.env.PORT;

const server = http.createServer(app);

function startServer() {
    server.listen(PORT, () => {
        console.log(`Server listening to port ${PORT}`);
        console.log(`Server base url: http://localhost:${PORT}`);
    });
}

startServer();