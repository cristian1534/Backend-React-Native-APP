import { TodoEntity } from "../../domain/todo.entity";
import { TodoRepository } from "../../domain/todo.repository";
import TodoModel from "../../infrastructure/model/todo.scheme";

export class MongoRepository implements TodoRepository {
    async addTodo (task: TodoEntity): Promise<any> {
        const todo = await TodoModel.create(task);
        return todo;
    }
    async getTodos() {
        const todos = await TodoModel.find();
        return todos;
    }
}