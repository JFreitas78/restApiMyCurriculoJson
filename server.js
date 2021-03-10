// server.js
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('Db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 8080;

server.use(middlewares);
server.use(router);
server.listen(port, () => {
    console.log(`Json server is running in ${port}`);
});