import express from "express";
import { Book } from "../bookModel.js";  
const router = express.Router();

router.post("/", async(req, res) =>{
    try{
        if(
            !req.body.title ||
            !req.body.author ||
            !req.body.publishYear
        ){
            return res.send({message:"Send all required fields"})
        }
        const newBook ={
            title: req.body.title,
            author: req.body.author,
            publishYear: req.body.publishYear
        };
        const book = await Book.create(newBook)
    }catch(error){
        console.log(error.message)
    }

})

router.get("/", async(req,res) =>{
    try{
        const books = await Book.find({});
        return res.status(200).json({
            count: books.length,
            data:books
        });
    }catch(error){
        console.log(error.message);
    }
})

router.get("/:id", async(req,res) =>{
    try{
        const { id } = req.params;

        const book = await Book.findById(id);

        
        return res.status(200).json(book);
    }catch(error){
        console.log(error.message);
    }
})

router.put("/:id", async(req,res)=>{
    try{
        if(
            !req.body.title ||
            !req.body.author ||
            !req.body.publishYear
        ){
            return res.send({message:"Send all required fields"})
        }

        const { id } = req.params;

        const result = await Book.findByIdAndUpdate(id, req.body)
        if(!result){
            return res.status(404).json({messgae:" Book not found"})
        }
        return res.status(200).send({ message: "Book updated successfully"})
    }catch(error){
        console.log(error.message);
    }
});

router.delete("/:id", async (req,res) =>{
    try{
        const { id } = req.params;
        const result = await Book.findByIdAndDelete(id);
        if(!result){
            return response.status(404).json({message : "Book not found"})

        }
        return res.status(200).send({ message: "book deleted"})
    }catch(error){
        console.log(error.message)
    }
})

export default router;