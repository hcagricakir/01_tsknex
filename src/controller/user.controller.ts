import { Router, Response, Request, NextFunction } from "express";
import { UserServices } from "../services/user.service";
// import {userSchema} from '../validation/validation_schema';
export class UserController {
    public router: Router;
    private userService: UserServices;

    constructor() {
        this.router = Router();
        this.userService = new UserServices();
        this.routes();
    }

    // public getUsers = async (req: Request, res: Response) => {
    //     this.userService.getUsers(req, res);
    // }

    getAllUsers(req: Request, res: Response, next: NextFunction) {
        this.userService.getAllUsers().then((user) => {
          return res.status(200).send(user);
        })
          .catch((err) => {
            next(err);
          });
      }

    getUserbyId(req: Request, res: Response, next: NextFunction) {
        const id= parseInt(req.params.id);
        this.userService.getUserbyId(id).then((user) => {
          return res.status(200).send(user);
        })
          .catch((err) => {
            next(err);
          });
      }

    public createUser = async (req: Request, res: Response) => {
        this.userService.createUser(req, res);
    }

    public updateUser = async (req: Request, res: Response) => {
        this.userService.updateUser(req, res);
    }

    public deleteUser = async (req: Request, res: Response) => {
        this.userService.deleteUser(req, res);
    }

    public routes() {
        this.router.get('/', this.getAllUsers.bind(this));
        this.router.get('/:id', this.getUserbyId.bind(this));
        this.router.post('/', this.createUser);
        this.router.put('/:id', this.updateUser);
        this.router.delete('/:id', this.deleteUser);
    }
//validasyon + promise
}