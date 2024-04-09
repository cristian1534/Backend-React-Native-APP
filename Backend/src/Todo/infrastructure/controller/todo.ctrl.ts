import { Request, Response } from "express";
import { TodoUseCase } from "../../application/todoUseCase"
import { HttpResponse } from "../error/validation.error";

export class TodoController {
    constructor(
        private todoUseCase: TodoUseCase, 
        private readonly httpResponse: HttpResponse = new HttpResponse()
        ){}

    public addCtrl = async ({ body }: Request, res: Response) =>{
        try {
            const task = await this.todoUseCase.addTodo(body);
            return this.httpResponse.created(res, task);
        }catch(err){
            return this.httpResponse.internalServerError(res, err);
        }
    }

    public getCtrl = async ( req: Request, res: Response) => {
        try {
            const tasks = await this.todoUseCase.getTodos();
            if(!tasks?.length) return this.httpResponse.notFound(res, "No tasks")
            return this.httpResponse.ok(res, tasks)
        }catch(err){
            return this.httpResponse.internalServerError(res, err)
        }
    } 
}