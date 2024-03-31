const express=require('express');
const {createtodo, updatedtodo}=require("./types");
const { todo } = require('./db');
const cors=require("cors");
const app=express();
app.use(express.json());
app.use(cors());

app.post('/todo',async function(req,res){
    const createpayload= req.body;
    const parsepayload=createtodo.safeparse(createpayload);
    if(!parsepayload.success){
        res.status(411).json({
            msg:"you sent wrong inputs",
        })
        return;
    } 
    await todo.create({
        title:createpayload.title,
        description:createpayload.description,
        completed : false
    })

    res.json({
        msg:"Todo created"
    })

})
app.get('/todos',async function(req,res){
    const todos= await  todo.find({});
    res.json({
        todos
    })

})

app.put('/completed',async function(req,res){
    const updatepayload=req.body
    const parsepayload=updatedtodo.safeParse(updatepayload);
    if(!parsepayload.success){
        res.status(411).json({
            msg:"you sent the wrong inputs",
        })
        return;
    }
    await todo.update({
        id:req.body.id
    },{ 
        completed:true  
    })
    res.json({
        msg:"Todo marked as completed"
    })
    
})

app.listen(3000);