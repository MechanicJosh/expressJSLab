const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.use((req, res, next) => {
    console.log(`Request URL: ${req.url}`);
    next();
});

app.get('/', (req, res) => {
    res.send(`Welcome to the server side...`);
});

app.use(express.static(path.join(__dirname, '../public')));

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
