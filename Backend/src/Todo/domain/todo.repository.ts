import { TodoEntity } from "./todo.entity"

export interface TodoRepository {
    addTodo(task: TodoEntity): Promise<TodoEntity | null>;
    getTodos(): Promise<TodoEntity[] | null>;
    getTodoById(uuid: string): Promise<TodoEntity |null>;
    deleteTodo(uuid: string): Promise<TodoEntity | null>;
    updateTodo(uuid: string, updatedTask: Partial<TodoEntity>): Promise<TodoEntity | null>;
}