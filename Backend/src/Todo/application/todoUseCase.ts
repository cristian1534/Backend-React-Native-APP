import { TodoValue} from "../domain/todo.value";
import { TodoRepository} from "../domain/todo.repository";
import { TodoEntity } from "../domain/todo.entity";

export class TodoUseCase {
    constructor(private readonly todoRepository: TodoRepository){}

    public async addTodo({task, completed}:{task:string, completed:boolean }){
        const todoValue = new TodoValue({task, completed})
        const todoCreated = await this.todoRepository.addTodo(todoValue)
        return todoCreated
    }

    public async getTodos() {
        const todos = await this.todoRepository.getTodos()
        return todos
    }

    public async getTodoById(uuid:string){
        const todo = await this.todoRepository.getTodoById(uuid)
        return todo
    }

    public async updateTodo(uuid:string, updatedTask:Partial<TodoEntity>) {
        const todo = await this.todoRepository.updateTodo(uuid, updatedTask)
        return todo
    }
    public async deleteTodo(uuid:string){
        const todo = await this.todoRepository.deleteTodo(uuid)
        return todo
    }

}
