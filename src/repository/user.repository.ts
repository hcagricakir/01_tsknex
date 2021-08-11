import { Request, Response } from 'express';
import knexDB from '../db/knex';
import { Userdb } from '../interface/user.interface';

export class UserRepository {
    public knx: typeof knexDB;

    constructor() {
        this.knx = knexDB;
    }

    async getUsers(req: Request, res: Response): Promise<Response> {
        try {
            const response = await this.knx.db("userdb").select("*");
            return res.status(200).json(response);
        }
        catch (e) {
            console.log(e);
            return res.status(500).json('Server Err');
        }
    }

    async getUserbyId(req: Request, res: Response): Promise<Response> {
        const id = parseInt(req.params.id);
        const response = await this.knx.db("userdb").select("*").whereRaw('id=?', [id]);

        return res.status(200).json(response);
    }

    async createUser(req: Request, res: Response, userdb: Userdb): Promise<Response> {
        const { id, isim, lokasyon } = req.body;

        this.knx.db("userdb").insert([
            userdb
        ]).then(() => { });

        return res.status(200).json({
            message: 'create success',
            body: {
                userdb: {
                    id,
                    isim,
                    lokasyon
                }
            }
        })
    }

    async deleteUser(req: Request, res: Response): Promise<Response> {
        const x = parseInt(req.params.id);
        console.log("geldi");

        const response = await this.knx.db("userdb").where({ id: x }).del().then(() => { });


        return res.status(200).json(response);
    }
    async updateUser(req: Request, res: Response): Promise<Response> {
        const x = parseInt(req.params.id);
        console.log("geldi update");

        const response = await this.knx.db("userdb").update({
            id: req.body.id,
            isim: req.body.isim,
            lokasyon: req.body.lokasyon

        }).where({ id: x }).then(() => { });


        return res.status(200).json({
            message: 'update success',

        })


    }
}