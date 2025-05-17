const express = require('express');
const app = express();
// Port environment setting
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

// retieve data from route
app.get('/', (req, res, next) => {
    res.send('<h1>This is working!</h1>');
})

// adds data to route
app.post('/', (req, res, next) => {
    res.send('Post request posted');
})

// server listener
app.listen(PORT, () => {
    console.log(`Listening to server at port ${PORT}`);
})



