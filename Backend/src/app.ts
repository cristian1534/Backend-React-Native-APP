import express from 'express';
import cors from 'cors';
import "dotenv/config";
import { dbInit } from "./Todo/infrastructure/database/mongo";
import todoRoute from "./Todo/infrastructure/route/todo.route";


const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(todoRoute)

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})

dbInit();
