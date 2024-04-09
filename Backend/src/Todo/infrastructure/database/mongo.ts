import { connect } from "mongoose";
import "dotenv/config";

const DB_URI = `${process.env.DB_URI}`

export const dbInit = async () => {
    await connect (DB_URI)
    .then(() => console.log("Mongoose initialized"))
    .catch((err) => console.log("Connection failed", err.message))
}