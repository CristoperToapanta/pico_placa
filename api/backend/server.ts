const express = require('express');
const cors = require('cors');
const http = require('http');

import validarCirculacion from './routes/ejecucionRouter';

const app = express();
const server = http.createServer(app);
const port = 3003;

app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }));

app.use('/ejecutar', validarCirculacion)

server.listen(port, () => {
    console.log('Servidor en el puerto:' + port);
});