const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.set('view engine', 'views');

app.get('/', (req, res) => {
    res.render('helloworld', {
        foo: 'world'
    });
});
app.get('/cats', (req, res) => {
    res.render('animals', { animalsound: 'Meow' });
});
app.get('/dogs', (req, res) => {
    res.render('animals', { animalsound: '' });
});

app.get('/cats_and_dogs', (req, res) => {
    res.render('animals', { animalsound: 'Living together' });
});

app.get('/greet:name', (req, res) => {
    res.render('parameter', { name: req.params.name });
});

app.get('/year?age', (req, res) => {
    res.render('born', { age: req.query.age });
});


app.listen(3001, () => {
    console.log('listening to the server')
})