//Import express
const express = require('express');

const app = express();
const PORT = 3000;


app.get('/', (req, res) => {
    res.send('Hello');
})

//Greeting path with name parameter
app.get('/greeting/:name', (req, res) => {
    res.send(`What's up, ${req.params.name}`);
})

app.listen(PORT, () => {
    console.log('Running');
})