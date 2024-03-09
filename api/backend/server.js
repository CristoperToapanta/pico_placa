"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var cors = require('cors');
var http = require('http');
var ejecucionRouter_1 = require("./routes/ejecucionRouter");
var app = express();
var server = http.createServer(app);
var port = 3003;
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }));
app.use('/ejecutar', ejecucionRouter_1.default);
server.listen(port, function () {
    console.log('Servidor en el puerto:' + port);
});
