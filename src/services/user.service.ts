import { Request, Response } from 'express';
import { UserRepository } from '../repository/user.repository';
import { User } from '../interface/user.interface';

export class UserServices {

    private userRepository: UserRepository;
    
    constructor() {
        this.userRepository = new UserRepository;
    }

    // async getUsers(req: Request, res: Response) {
    //     this.userRepository.getUsers(req, res);
    // }

    async getAllUsers(): Promise<User[]> {
        return new Promise((resolve, reject) => {
            this.userRepository.getAllUsers()
                .then((result) => {
                    return resolve(result);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    }


    async getUserbyId(req: Request, res: Response) {
        this.userRepository.getUserbyId(req, res);
    }

    async createUser(req: Request, res: Response) {
        const userdb = req.body as User;
        this.userRepository.createUser(req, res, userdb);
    }

    async deleteUser(req: Request, res: Response) {
        this.userRepository.deleteUser(req, res);
    }

    async updateUser(req: Request, res: Response) {

        this.userRepository.updateUser(req, res);
    }
}
//

