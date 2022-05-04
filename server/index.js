const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");


const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "admin",
    database: "crudgames",
});

app.use(cors());
app.use(express.json());

app.post('/register', (req, res) => {
    const { name } = req.body;
    const { cost } = req.body;
    const { category } = req.body;

    console.log(name);

    let sql = "INSERT INTO games (name, cost, category) VALUES ( ?, ?, ?)";

    db.query(sql, [name, cost, category], (err, res) => {
        console.log(err);
    });
});

app.get('/getCards', (req, res) =>{
    let sql = "SELECT * from games";

    db.query(sql, (err, result) =>{
        if (err) console.log(err);
        else res.send(result);
    });
});

app.listen(3001, () => {
    console.log("Rodando servidor na porta 3001");
});