const express = require("express");
const mongoose = require("./database/mongoose");
const app = express();

const List = require("./database/models/list")
const Task = require("./database/models/task")

// this allows the application to use JSON data
app.use(express.json())


// CORS setup
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, HEAD, OPTIONS, PUT, PATCH, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})


/* 
List: Create, Update, ReadOne, ReadAll, Delete
Task: Create, Update, ReadOne, ReadAll, Delete
*/

//! ------ LIST URLs ------- //

// get all list
app.get('/lists',(req, res) => {
    List.find({})
        .then(lists => res.send(lists))
        .catch((error)=> console.log(error));
})

// get specific list
app.get('/lists/:listId', (req, res) => {
    List.find({_id: req.params.listId})
        .then(list => res.send(list))
        .catch((error)=> console.log(error));
})


// add list
app.post('/lists', (req, res) => {
    (new List({'title': req.body.title}))
    .save()
    .then(list => res.send(list))
    .catch((error)=> console.log(error));
})


// update list
app.patch('/lists/:listId', (req, res) => {
    List.findOneAndUpdate({ '_id': req.params.listId}, { $set: req.body})
        .then(list => res.send(list))
        .catch((error)=> console.log(error));
})

// delete list
app.delete('/lists/:listId', (req, res) => {
    // cascade delete
    const deleteTasks = (list) => {
        Task.deleteMany({_listId: list._id})
            .then(()=> list)
            .catch((error)=> console.log(error));
    };
    List.findOneAndDelete(req.params.listId)
        .then((list) => res.send(deleteTasks(list)))
        .catch((error)=> console.log(error));
})



//! ------ TASK URLs ------- //

// get all task on a list
app.get('/lists/:listId/tasks', (req, res) => {
    Task.find({_listId: req.params.listId})
        .then((tasks) => res.send(tasks))
        .catch((error)=> console.log(error));
})

// get specifice task on a list
app.get('/lists/:listId/tasks/:taskId', (req, res) => {
    Task.find({_listId: req.params.listId, _id: req.params.taskId})
        .then((tasks) => res.send(tasks))
        .catch((error)=> console.log(error));
})

// create task on a list
app.post('/lists/:listId/tasks', (req, res) => {
    (new Task({'_listId': req.params.listId, "title": req.body.title }))
        .save()
        .then((task) => res.send(task))
        .catch((error)=> console.log(error));
})

// update task on a list
app.patch('/lists/:listId/tasks/:taskId', (req, res) => {
    Task.findOneAndUpdate({ '_id': req.params.taskId}, { $set: req.body})
        .then(task => res.send(task))
        .catch((error)=> console.log(error));
})

// delete task on a list
app.delete('/lists/:listId/tasks/:taskId', (req, res) => {
    Task.findOneAndDelete(req.params.taskId)
        .then(task => res.send(task))
        .catch((error)=> console.log(error));
})




app.listen(3000, console.log("Server connected on Port 3000"));





/* 
    CORS - Cross Origin Request Security
    localhost:3000 - backend api
    localhost:4200 - frontend
*/ 