import { Router, Response, Request, NextFunction } from "express";
import { UserServices } from "../services/user.service";
import schema from "../validation/user.validator";
import Joi from "joi";
import { ValidationError } from "../common/http-exeption"
export class UserController {
    public router: Router;
    private userService: UserServices;

    constructor() {
        this.router = Router();
        this.userService = new UserServices();
        this.routes();
    }



    getAllUsers(req: Request, res: Response, next: NextFunction) {
        this.userService.getAllUsers().then((user) => {
            return res.status(200).send(user);
        })
            .catch((err) => {
                next(err);
            });
    }
    getUserbyId(req: Request, res: Response, next: NextFunction) {
        const id = parseInt(req.params.id);
        schema.idControl.validateAsync({ id }).then((validatedId) => {
            this.userService.getUserbyId(id).then((user) => {
                return res.status(200).send(user);
            })
                .catch((err) => {
                    next(err);
                });
        })
            .catch((err: Joi.ValidationError) => {
                next(new ValidationError(err.message));
            })
    }
    createUser(req: Request, res: Response, next: NextFunction) {
        const { body } = req;
        schema.create.validateAsync(body).then((validatedUser) => {
            this.userService.createUser(validatedUser)
                .then((user) => {
                    return res.status(200).send(user);
                })
                .catch((err) => {
                    next(err);
                });
        })
            .catch((err: Joi.ValidationError) => {
                next(new ValidationError(err.message));
            })
    }
    updateUser(req: Request, res: Response, next: NextFunction) {
        const { body } = req;
        schema.update.validateAsync(body).then((validatedUser) => {
            this.userService.updateUser(validatedUser)
                .then((user) => {
                    return res.status(200).send(user);
                })
                .catch((err) => {
                    next(err);
                });
        })
            .catch((err: Joi.ValidationError) => {
                next(new ValidationError(err.message));
            })
    }
    deleteUser(req: Request, res: Response, next: NextFunction) {
        const id = parseInt(req.params.id);
        schema.idControl.validateAsync({ id }).then((validatedId) => {
            this.userService.deleteUser(id).then((user) => {
                return res.status(200).send(user);
            })
                .catch((err) => {
                    next(err);
                });
        })
            .catch((err: Joi.ValidationError) => {
                next(new ValidationError(err.message));
            })
    }


    public routes() {
        this.router.get('/', this.getAllUsers.bind(this));
        this.router.get('/:id', this.getUserbyId.bind(this));
        this.router.post('/', this.createUser.bind(this));
        this.router.put('/:id', this.updateUser.bind(this));
        this.router.delete('/:id', this.deleteUser.bind(this));
    }
    //validasyon + promise
}