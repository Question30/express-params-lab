//Import express
const express = require('express');

const app = express();
const PORT = 3000;

const magicResponses = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"];


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

//Magic 8 Ball
app.get('/magic/:question', (req, res) => {
    const randResponse = magicResponses[Math.floor(Math.random() * magicResponses.length)]

    res.send(`<h1>Question: ${req.params.question}</h1>
        <h1>Answer: ${randResponse}</h1>
    `)
})

app.listen(PORT, () => {
    console.log('Running');
})