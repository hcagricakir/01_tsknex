import { Request,Response} from 'express';
import knexDB from '../db/knex';
import {userdb} from '../interface/user.interface';

export class UserRepository{
    public knx: typeof knexDB;
    
    constructor(){
        this.knx = knexDB;
    }

    public getUsers = async (req: Request,res: Response): Promise<Response> =>{
        try {
            const response = await this.knx.db("userdb").select("*");
            return res.status(200).json(response);
        }
        catch(e){
            console.log(e);
            return res.status(500).json('Server Err');
        }
    }

    public getUserbyId = async (req: Request,res: Response): Promise<Response> =>{
        const id = parseInt(req.params.id);
        const response = await this.knx.db("userdb").select("*").whereRaw('id=?',[id]);

        return res.status(200).json(response);
    }

}