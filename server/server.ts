const express = require('express');
// import { payslip } from './payslip'; 

const app = express();
// Allow any method from any host and log requests
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, DELETE');
    if('OPTIONS' === req.method) {
        res.sendStatus(200);
    } else {
        console.log(`${req.ip} ${req.method} ${req.url}`);
        next();
    }
});

const users = [
    {id: 1, name: "Joanna", salary: 30000},
    {id: 2, name: "Duncan", salary: 300000},
    {id: 3, name: "Azlina", salary: 37000},
    {id: 4, name: "Richard", salary: 22500}
]

// Handle POST requests that come in formatted as JSON
app.use(express.json());
// app.use('/', payslip)

// GET by id
app.get('/:id', (req, res) => {
    const id = req.params.id;
    const user = users.find(user => user.id === id);
    res.send(user);
} );

// GET all users
app.get('/', (req, res) => {
    res.send(users);
});

// start our server on port 4200
app.listen(4200, '127.0.0.1', function() {
    console.log("Server now listening on 4200");
});