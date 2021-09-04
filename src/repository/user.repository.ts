import knexDB from '../db/knex';
import { User, List } from '../interface/user.interface';
import { UserNotFound, DatabaseError } from "../common/http-exeption"
import { PaginationOptions } from '../interface/requestPagination.interface';
import { number } from 'joi';
export class UserRepository {
    public knx: typeof knexDB;

    constructor() {
        this.knx = knexDB;
    }

    async getAllUsers(options: PaginationOptions): Promise<List> {

        return new Promise<List>(async (resolve, reject) => {
            let totalcount: number;
            await this.knx.db("userdb")
                .count("id")
                .then((result) => {
                    totalcount = Number(result[0].count)
                })
            await this.knx.db
                .select("id", "isim", "lokasyon")
                .from("userdb")
                .limit(options.limit)
                .offset(options.skip)
                // .where(options.match)
                .orderBy(options.orderBy, options.orderSort)
                .then((result) => {

                    resolve({
                        totalCount: totalcount,
                        data: result
                    })
                })
                .catch((error) => {
                    reject(error);
                })
        })
    }
    async getUserbyId(id: number): Promise<User> {
        return new Promise(async (resolve, reject) => {
            await this.knx.db("userdb")
                .select("*")
                .where({ id: id })
                .first()
                .then((result) => {
                    if (result) {
                        resolve(result);
                    }
                    else {
                        reject(new UserNotFound());
                    }
                })
                .catch(() => {
                    reject(new DatabaseError("databaseerr"));
                });
        });
    }
    async createUser(user: User): Promise<User> {
        return new Promise(async (resolve, reject) => {
            await this.knx.db("userdb").insert(user)
                .returning("*")
                .then((result) => {
                    resolve(result[0]);
                })
                .catch((error) => {
                    reject(error);

                })
        })
    }
    async updateUser(body: User): Promise<User> {
        return new Promise(async (resolve, reject) => {
            await this.knx.db("userdb")
                .select("*")
                .where("id", body.id)
                .first()
                .then((result) => {
                    if (result) {
                        this.knx.db("userdb")
                            .select("*")
                            .where({ id: body.id })
                            .update(body, ["id", "isim", "lokasyon"])
                            .then((result) => {
                                resolve(result[0])
                            })
                    }
                    else {
                        reject(new UserNotFound());
                    }
                })
                .catch(() => {
                    reject(new DatabaseError("databaseerr"));

                })
        })
    }
    async deleteUser(id: number): Promise<User> {
        return new Promise(async (resolve, reject) => {
            await this.knx.db("userdb")
                .select("*")
                .where({ id: id })
                .first()
                .then((result) => {
                    if (result) {
                        this.knx.db("userdb")
                            .select("*")
                            .where({ id: id })
                            .del()
                            .then(() => {
                                resolve(result);
                            })
                    }
                    else {
                        reject(new UserNotFound());
                    }
                })
                .catch((error) => {
                    reject(error);

                })
        })
    }
}