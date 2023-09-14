const express = require('express');
const fs = require('fs')
const app = express();
const PORT = 3000;

for(let i = 1; i<=100; i++){
     const dir = `DAY ${i}`

fs.rmdir(dir , (err) => {
    if(err){
        console.log(err)
    }else{
        console.log("File Created Successfully...")
    }
})
}

app.get('/', (req, res) => {
    res.send("<h1> Hello I am Express </h1>")
});

app.listen(PORT, () => {
    console.log(`Server is Started on PORT:${PORT}`)
})