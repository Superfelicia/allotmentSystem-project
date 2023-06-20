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

app.get('/getUser', (req, res) => {
    connection.connect((err) => {
        if (err) throw err;
        const sql = 'SELECT * FROM user';

        connection.query(sql, (err, result) => {
            if (err) throw err;
            console.log('got user');
            res.send(result);
        })
    })
})

app.get('/getAllAllotments', (req, res) => {
    connection.connect((err) => {
        if (err) throw err;
        const sql = 'SELECT * FROM allotment LEFT JOIN user ON allotment.userId=user.id ORDER BY allotmentNumber';

        connection.query(sql,(err, result) => {
            if (err) throw err;
            res.send(result);
        })
    })
})

app.get('/getAllotmentUser', (req, res) => {
    connection.connect((err) => {
        if (err) throw err;
        const sql = 'SELECT * FROM user JOIN allotment ON user.Id=allotment.userId';

        connection.query(sql, (err, result) => {
            if (err) throw err;
            console.log('allotment with userId');
            res.send(result);
        })
    })
})

app.get('/getAllotmentsByUserId', (req, res) => {
    console.log(req.query.userId);
    const userId = req.query.userId;

    connection.connect((err) => {
        if (err) throw err;
        const sql = 'SELECT * FROM allotment WHERE userId=?';


        connection.query(sql, [userId], (err, result) => {
            if (err) throw err;
            console.log('user id', result);
            res.send(result);
        })
    })
})


app.listen(3001);