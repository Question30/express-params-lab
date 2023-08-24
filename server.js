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

//Tip Calculator
app.get('/tip/:total/:percent', (req, res) => {
    const tip = req.params.total * (req.params.percent / 100);

    res.send(`your tip will be ${tip}`);
})

app.listen(PORT, () => {
    console.log('Running');
})