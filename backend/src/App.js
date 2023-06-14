const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'allotment_db'
})

app.use(express.json());
app.use(cors());


app.post('/createUser', (req, res) => {
    const newUser = req.body.user;
    console.log(newUser);


    connection.connect((err) => {
        if (err) throw err;
        const sql = 'INSERT INTO user VALUES (null, ?, ?, ?, ?, ?, ?, ?, null, null)';

        connection.query(sql, [newUser.firstName, newUser.lastName, newUser.address, newUser.zipCode, newUser.city, newUser.phoneNumber, newUser.email, newUser.springCleaning, newUser.fallCleaning], (err, result) => {
            if (err) throw err;
            console.log('success!');
        });
        res.send('yes');
    });
})


app.listen(3001);