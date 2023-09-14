const express = require('express');
const product = require('./product.json');
const app = express();
const PORT = 3000;

app.use((req, res, next) => {
    console.log(req.url, "Middleware 1")
    next()
})

app.use((req, res, next) => {
    console.log("Middleware 2")
    next()
})

app.get("/", (req, res) => {
    res.send("Hello I am Express....")
})

app.get("/about", (req, res) => {
    res.status(200).send(product)
})

app.get("/contact", (req, res) => {
    res.send("Contact US")
})

app.get("/privacy", (req, res) => {
    res.send("Privacy Page")
})

app.listen(PORT, () => {
    console.log(`Server is Started On PORT:${PORT}`)
})