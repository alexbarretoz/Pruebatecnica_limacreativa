const express = require('express');
const dotenv = require ('dotenv');
const path = require("path")

 
dotenv.config();
const app = express();
const port = process.env.PORT;
//app.use(bodyParse.json());
app.use(express.json());


// inicio
app.get('/', (req, res) => {    
  res.sendFile(path.join(__dirname,"index.html"));
});


// post (suma)
app.post("/add",(req,res) => {

const { a , b } = req.body;
res.send(

    {result: parseInt(a) + parseInt(b) }

)
});

// al hacer un Post tiene una respuesta, en este caso un jason con la suma de 2 numeros


app.listen(port, () => {
    console.log(`Servidor ejecutándose en http://localhost:${port}`);
  });