import { Request, Response } from 'express';
import { UserRepository } from '../repository/user.repository';
import { User } from '../interface/user.interface';
import { idText } from 'typescript';

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


    async getUserbyId(id: number): Promise<User[]> {
        return new Promise((resolve, reject) => {
            this.userRepository.getUserbyId(id)
                .then((result) => {
                    return resolve(result);
                })
                .catch((err) => {
                    reject(err);
                });
        });
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

