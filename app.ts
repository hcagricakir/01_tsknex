import express, { Request, Response } from 'express';
import { UserController } from './src/controller/user.controller';
import knexDB from './src/db/knex';
import logger from './src/middlewares/logger'
class Server {
    
    private userController: UserController;
    private app: express.Application;

    constructor() {
        this.app = express();
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
        require('dotenv').config();
        this.configuration();
        this.userController = new UserController();
        knexDB.init();
        this.routes();  
    }

    public configuration() {
        this.app.set('port', process.env.POSTGRES_PORT || 3000);
    }

    public async routes() {
        this.userController = new UserController();

        this.app.use('/userdb', this.userController.router);
    }
    
    public start() {
        this.app.listen(this.app.get('port'), () => {
            console.log(`Server ${this.app.get('port')} portundan dinleniyor. `);

        })
    }
}

const server = new Server();
server.start();