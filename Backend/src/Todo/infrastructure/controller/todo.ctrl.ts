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

    public getById = async (req: Request, res: Response) => {
        try { 
            const { uuid } = req.params;
            const task = await this.todoUseCase.getTodoById(uuid);
            if(!task) return this.httpResponse.notFound(res, "Task not found")
            return this.httpResponse.ok(res, task)
        }catch(err) {
            return this.httpResponse.internalServerError(res, err)
        }
    }
    
    public updateCtrl = async (req: Request, res: Response) => {
        try {
            const { uuid } = req.params;
            const  data = req.body;
            const task = await this.todoUseCase.updateTodo(uuid, data);
            if(!task) return this.httpResponse.notFound(res, "Task not found")
            return this.httpResponse.ok(res, "Todo updated successfully")
        }catch(err) {
            return this.httpResponse.internalServerError(res, err)
        }
    }

    public deleteCtrl = async (req: Request, res: Response) => {
        try {
            const { uuid } = req.params;
            const task = await this.todoUseCase.deleteTodo(uuid);
            if(!task) return this.httpResponse.notFound(res, "Task not found")
            return this.httpResponse.ok(res, "Todo deleted successfully")
        }catch(err) {
            return this.httpResponse.internalServerError(res, err)
        }
    }
}