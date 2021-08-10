import {Request, Response} from 'express';
import {UserRepository} from '../repository/user.repository';
import {userdb} from '../interface/user.interface';
// import {userSchema} from '../validation/validation_schema';

export class UserServices{

    private userRepository: UserRepository;
    constructor(){
        this.userRepository = new UserRepository;
    }

    public getUsers= async (req:Request, res:Response)=>{
        this.userRepository.getUsers(req,res);
    }

    public  getUserbyId =async (req:Request, res:Response)=>{
        this.userRepository.getUserbyId(req,res);
    }

}


