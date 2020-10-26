require('dotenv').config();

const http = require('http');
const app = require('./server');

const PORT = process.env.PORT || 5000;

const server = http.createServer(app);


server.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);

})