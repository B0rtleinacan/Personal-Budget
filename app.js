const express = require('express');
const app = express();

app.use(static('public'));

// Port environment setting
const PORT = process.env.PORT || 4002;

const month = [
    {
        id: 'january',
        amount: 2400
    },
    {
        id: 'febuary',
        amount: 2400
    },
    {
        id: 'march',
        amount: 2400
    },
    {
        id: 'april',
        amount: 2400
    }
];

app.get('/months', (req, res) => {
    res.status(200).send('Thing happened');
})

app.post('/month', (req, res) => {
    res.status(201).send('Thing created')
});

app.put('/month', (req, res) => {
    res.status(203).send('Thing updated');
});

app.delete('/month', (req, res) => {
    res.status(201).send('thing been deleted');
});
// server listener
app.listen(PORT, () => {
    console.log(`Listening to server at port ${PORT}`);
});



