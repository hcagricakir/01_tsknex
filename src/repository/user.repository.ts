import { Request, Response } from 'express';
import knexDB from '../db/knex';
import { User } from '../interface/user.interface';

export class UserRepository {
    public knx: typeof knexDB;

    constructor() {
        this.knx = knexDB;
    }



    async getAllUsers(): Promise<User[]> {

        return new Promise(async (resolve, reject) => {
            this.knx.db
                .select("*")
                .from("userdb")
                .then((result) => {
                    resolve(result);
                })
                .catch((error) => {
                    reject(error);
                })
        })
    }
    async getUserbyId(id: number): Promise<User[]> {
        return new Promise(async (resolve, reject) => {
            this.knx.db
                .select("*")
                .from("userdb")
                .where("id", id)
                .then((result) => {
                    resolve(result);
                })
                .catch((error) => {
                    reject(error);
                })
        })
    }
    async createUser(user: User): Promise<User> {
        return new Promise(async (resolve, reject) => {
            this.knx.db("userdb").insert(user)
                .returning("*")
                .then((result) => {
                    resolve(result[0]);
                })
                .catch((error) => {
                    reject(error);
                })
        })
    }
    async updateUser(user: User): Promise<User> {
        return new Promise(async (resolve, reject) => {
            this.knx.db("userdb")
                .where({ id: user.id })
                .update(user, ["id", "isim", "lokasyon"])
                .then((result) => {
                    resolve(result[0]);
                })
                .catch((error) => {
                    reject(error);
                })
        })
    }
    async deleteUser(id: number): Promise<Boolean> {
        return new Promise(async (resolve, reject) => {
            this.knx.db("userdb").where({ id: id }).del()
                .then(() => {
                    resolve(true);
                })
                .catch((error) => {
                    reject(error);
                })
        })
    }
}


//then catch yapısı eklenecek