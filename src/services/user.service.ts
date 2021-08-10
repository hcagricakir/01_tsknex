import { Request, Response } from 'express';
import { UserRepository } from '../repository/user.repository';
import { Userdb } from '../interface/user.interface';
// import {userSchema} from '../validation/validation_schema';

export class UserServices {

    private userRepository: UserRepository;
    constructor() {
        this.userRepository = new UserRepository;
    }

    async getUsers(req: Request, res: Response) {
        this.userRepository.getUsers(req, res);
    }

    async getUserbyId(req: Request, res: Response) {
        this.userRepository.getUserbyId(req, res);
    }

    async createUser(req: Request, res: Response) {
        const userdb = req.body as Userdb;
        this.userRepository.createUser(req, res, userdb);
    }

    async deleteUser(req: Request, res: Response) {
        this.userRepository.deleteUser(req, res);
    }

}


