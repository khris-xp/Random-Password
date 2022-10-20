const express = require('express');
const path = require('path');
const generatePassword = require('password-generator');

const app = express();

//app.use(express.static(path.join(__dirname, 'client/build')));
app.use(express.static(path.join(__dirname, 'client/build')));


app.get('/api/passwords', (req, res) => {
    const count = 5;

    // Generate 50 Passwords
    const passwords = Array.from(Array(count).keys()).map(i =>
        generatePassword(50, false)
    );

    res.json(passwords);

    // Recheck Count 0f Passwords
    console.log(`Sent ${count} passwords`);
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Password generator listening on ${port}`);