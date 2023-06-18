import express from "express";
import cors from 'cors'
import mongoose from "mongoose"
import connectDB  from '../config/database.js'; 
import { userRouter } from "./routes/users.js";

import { recipesRouter } from "./routes/recipes.js";


const app = express();

app.use(express.json());

app.use(cors());


app.use("/auth", userRouter);

app.use("/recipes", recipesRouter);



app.listen(3001, () => console.log("Server Started!"))


connectDB()