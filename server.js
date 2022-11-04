const express = require('express')
const app = express()
var cors = require('cors')

app.use(cors())
app.use(express.json())

const operations = {addition : "+", subtraction : "-" ,multiplication : "*", add : "+", subtract : "-", multiply : "*", sum : "+", minus : "-",difference : "-"}

const response = function(res,result, operation_type){
    res.status(200)
    .json({ slackUsername: "stilkinging", result, operation_type})
}

app.post("*",function(req,res){
   const {x,y,operation_type} = req.body
   if(operations[operation_type]) return response(res,  eval(x + operations[operation_type] + y) ,operation_type)
    // if +,-, * is submitted
    if(operation_type.trim().length == 1) return response(res, eval(x + operation_type + y), operation_type)
    
    // if the operation type is in words
    const wordsArray = operation_type.split(" ")
    let operation ;
        Object.keys(operations).forEach((prop, index)=>{
            if(wordsArray.includes(prop)){
                operation = { operation : operations[prop], prop}
            }
        })
    if(operation) return response(res, eval(x + operation.operation + y), operation.prop)
    let err = "it seems your operation_type deos not contain the word multiplication, addition, add, subtract, multiply difference or minus"
    return response(res, err , operation_type)
})


const PORT = process.env.PORT || 5000
app.listen(PORT, console.log("server running on Port " + PORT))