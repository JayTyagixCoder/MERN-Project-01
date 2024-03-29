import express, { response } from "express";
import { PORT,mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./bookModel.js";
import cors from "cors"
import booksRoutes from "./routes/bookRoutes.js"
const app = express();

//Middleware for parsing request body
app.use(express.json())

//Middleware for handling CORS POLICY
//OPTION 1 : Allow All origins with default of cors(*)
app.use(cors());
//OPTION 2: Allow custom origins
/*app.use(cors({
  origin: "http://localhost:3000",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type"]  
}))*/

app.get("/", (req,res) =>{
    return res.status(234).send("MERN STACK Project")
})

app.use('/books', booksRoutes)

mongoose
    .connect(mongoDBURL)
    .then(()=>{
        console.log("Datatbse conneceted")
        app.listen(PORT, ()=>{
            console.log(`Server is running at ${PORT}`)
        })

    })
    .catch((error) =>{
        console.log(error)
    })