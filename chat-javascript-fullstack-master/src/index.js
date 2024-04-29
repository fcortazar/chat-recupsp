const app = require("./app");
require("./database");
const http = require("http");
const socketio = require("socket.io");
const sockets= require ("./sockets");

const server = http.createServer(app);
const io = socketio(server);

sockets(io);

server.listen(app.get("port"));
console.log(`server on port ${app.get("port")}`);
