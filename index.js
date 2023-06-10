const express = require('express');
const dotenv = require ('dotenv');
 
dotenv.config();
const app = express();
const port = process.env.PORT;
app.use(express.json());



// inicio
app.get('/', (req, res) => {    
    res.json(
        {
            "Title": "Hola mundo"
        }
    );
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