import { v4 as uuid } from "uuid";
import { TodoEntity } from "./todo.entity";

export class TodoValue implements TodoEntity {
    uuid: string;
    task: string;
    completed: boolean;

    constructor({task, completed}:{task: string, completed: boolean}){
        this.uuid = uuid();
        this.task = task;
        this.completed = completed;
    }
}