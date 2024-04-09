import { TodoValue} from "../domain/todo.value";
import { TodoRepository} from "../domain/todo.repository";

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
}
