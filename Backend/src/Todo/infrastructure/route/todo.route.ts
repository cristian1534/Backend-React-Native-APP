import { Router } from "express";
import { MongoRepository} from "../repository/mongo.repository";
import { TodoUseCase} from "../../application/todoUseCase";
import { TodoController} from "../controller/todo.ctrl";

const route = Router();

const todoRepository = new MongoRepository();
const todoUseCase = new TodoUseCase(todoRepository);
const todoCtrl = new TodoController(todoUseCase);

route.post("/tasks", todoCtrl.addCtrl);
route.get("/tasks", todoCtrl.getCtrl);
route.get("/tasks/:uuid", todoCtrl.getById);
route.delete("/tasks/:uuid", todoCtrl.deleteCtrl);
route.patch("/tasks/:uuid", todoCtrl.updateCtrl);

export default route;