import { Schema, model } from "mongoose";

const TodoSchema = new Schema({
    uuid: {
        type: String,
        required: true,
    },
    task: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    },
},
    { timestamps: true },
)

const TodoModel = model("Todo", TodoSchema);
export default TodoModel;