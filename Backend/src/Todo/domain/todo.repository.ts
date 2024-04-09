import { TodoEntity } from "./todo.entity"

export interface TodoRepository {
    addTodo(task: TodoEntity): Promise<TodoEntity | null>;
    getTodos(): Promise<TodoEntity[] | null>;
}