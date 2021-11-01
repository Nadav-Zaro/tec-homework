// TODOS_JASONPLACEHOLDER_EXPRESS_MONGODB

const express = require("express"),
    PORT = 8000
app = express();
app.use(express.json())

const todosFunctions = require("./todosFunctions")

app.get("/todos", (req, res) => {
    // todosFunctions.showDocs(req,res)
    todosFunctions.showDocsAsync(req, res)
})

app.get("/todos/:id", (req, res) => {
    // todosFunctions.showById(req,res)
    todosFunctions.showByIdAsync(req, res)
})

app.post("/todos", (req, res) => {
    todosFunctions.postDoc(req,res)
    // todosFunctions.postDocAsync(req, res)
})

app.delete("/todos/:id", (req, res) => {
    // todosFunctions.deleteDoc(req, res)
    todosFunctions.deleteDocAsync(req, res)
})

app.patch("/todos/:id", (req, res) => {
    // todosFunctions.updateDoc(req,res)
    todosFunctions.updateDocAsync(req, res)
})


app.listen(PORT, () => {
    console.log(`listenning to port ${PORT}`);
})