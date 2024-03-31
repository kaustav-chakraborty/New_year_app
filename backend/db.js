 const mongoose =require("mongoose");



 mongoose.connect("mongodb+srv://root:root@book-store-mern.90qe2vr.mongodb.net/books-collection?retryWrites=true&w=majority")
 const todoSchema=mongoose.Schema({
    title:String,
    description:String,
    Completed:Boolean
 })
 const todo=mongoose.model("todos",todoSchema);
 module.exports={
    todo
 }