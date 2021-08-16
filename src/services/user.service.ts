import { UserRepository } from '../repository/user.repository';
import { User } from '../interface/user.interface';

export class UserServices {

    private userRepository: UserRepository;

    constructor() {
        this.userRepository = new UserRepository;
    }


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
    async createUser(user: User): Promise<User> {
        return new Promise((resolve, reject) => {
            this.userRepository.createUser(user)
                .then((result) => {
                    return resolve(result);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    }
    async updateUser(user: User): Promise<User> {
        return new Promise((resolve, reject) => {
            this.userRepository.updateUser(user)
                .then((result) => {
                    return resolve(result);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    }
    async deleteUser(id: number): Promise<Boolean> {
        return new Promise((resolve, reject) => {
            this.userRepository.deleteUser(id)
                .then((result) => {
                    return resolve(result);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    }

}
