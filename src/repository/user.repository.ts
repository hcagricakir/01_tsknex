import knexDB from '../db/knex';
import { User } from '../interface/user.interface';
import { UserNotFound, DatabaseError } from "../common/http-exeption"
import { PaginationOptions } from '../interface/requestPagination.interface';
export class UserRepository {
    public knx: typeof knexDB;

    constructor() {
        this.knx = knexDB;
    }

    async getAllUsers(): Promise<User[]> {//options: PaginationOptions

        return new Promise(async (resolve, reject) => {
            this.knx.db
                .select("*")
                .from("userdb")
                // .orderBy(options.orderBy)
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
            await this.knx.db("userdb")
                .select("*")
                .where({ id: id })
                .first()
                .then((result) => {
                    if (result) {
                        resolve(result);
                    }
                    else {
                        reject(new UserNotFound("usernotfound"));
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
    async updateUser(body: User): Promise<User[]> {
        return new Promise(async (resolve, reject) => {
            await this.knx.db("userdb")
                .select("*")
                .where("id",body.id)
                .first()                         
                .then((result) => {
                    if (result) {
                        this.knx.db("userdb").select("*").where({ id: body.id }).update(body, ["id", "isim", "lokasyon"]).then((result)=>{
                            resolve(result)
                        })
                    }
                    else {
                        reject(new UserNotFound("usernotfound"));
                    }
                })
                .catch(() => {
                    reject(new DatabaseError("databaseerr"));

                })
        })
    }
    async deleteUser(id: number): Promise<User[]> {
        return new Promise(async (resolve, reject) => {
            await this.knx.db("userdb").select("*").where({ id: id })
                .then((result) => {
                    if (result) {
                       this.knx.db("userdb").select("*").where({id:id}).del().then(()=>{
                          resolve(result); 
                       })
                       
                        
                    }
                    else {
                        reject(new UserNotFound("usernotfound"));
                    }
                })
                .catch((error) => {
                    reject(error);

                })
        })
    }
}


//then catch yapısı eklenecek