import { Router, Response, Request } from "express";
import { UserServices } from "../services/user.service";

export class UserController {
    public router: Router;
    private userService: UserServices;

    constructor() {
        this.router = Router();
        this.userService = new UserServices();
        this.routes();
    }

    public getUsers = async (req: Request, res: Response) => {
        this.userService.getUsers(req, res);
    }

    public getUserbyId = async (req: Request, res: Response) => {
        this.userService.getUserbyId(req, res);
    }

    public createUser = async (req: Request, res: Response) => {
        this.userService.createUser(req, res);
    }

    // async updateUser (req: Request, res: Response){
    //     this.userService.updateUser(req,res);
    // }

     public deleteUser  = async  (req: Request, res: Response)=>{
          this.userService.deleteUser(req,res);
     }

    public routes() {
        this.router.get('/', this.getUsers);
        this.router.get('/:id', this.getUserbyId);
        this.router.post('/', this.createUser);
        // this.router.put('/:id',this.updateUser);
        this.router.delete('/:id',this.deleteUser);
    }

}