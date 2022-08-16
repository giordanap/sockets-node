import express from 'express';
import cors from 'cors';
import { createServer } from 'http';
import { Server as socketIo } from 'socket.io';
import { socketController } from '../../sockets/controllers.js';

export default class Server {

    constructor() {
        this.app      = express();
        this.port     = process.env.PORT;
        this.server   = createServer(this.app);
        this.io       = new socketIo(this.server);

        this.pathList = {};

        this.middlewares();
        this.routes();

        // Sockets
        this.sockets();
    }

    middlewares() {
        this.app.use(cors());
        this.app.use(express.static('public'));
    }

    routes() {
        // this.app.use(this.pathList.pathTest, router);
    }

    sockets() {
        this.io.on( 'connection', socketController );
    }

    listen() {
        this.server.listen(this.port);  
        console.log(`Server running on port ${ this.port }`);
    }
}