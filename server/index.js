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

app.post('/login', (req,res) => {

    const email = req.body.email;
    const password = req.body.password;

    console.log(email, password);

    let sql = "SELECT * FROM users WHERE email = ? AND password = ?";

    db.query(sql, [email, password], (err, result) => {
        if (err) {
            res.send(err);
        }
        if (result.length > 0) {
            res.send({login: true});
        } else {
            res.send({login: false});
        }
        
    });
});

app.post('/register', (req, res) => {
    const { name } = req.body;
    const { cost } = req.body;
    const { category } = req.body;

    console.log(name);

    let sql = "INSERT INTO games (name, cost, category) VALUES ( ?, ?, ?)";

    db.query(sql, [name, cost, category], (err, result) => {
        if (err) console.log(err);
        else res.send(result);
    });
});

app.get('/getCards', (req, res) =>{
    let sql = "SELECT * from games";

    db.query(sql, (err, result) =>{
        if (err) console.log(err);
        else res.send(result);
    });
});

app.put('/edit', (req, res) => {

    const { id } = req.body;
    const { name } = req.body;
    const { cost } = req.body;
    const { category } = req.body;

    console.log(id, name, cost, category);

    let sql = "UPDATE games SET name = ?, cost = ?, category = ? WHERE idgame = ?";

    db.query(sql, [name, cost, category, id], (err, result) => {
        if(err) console.log(err);
        else res.send(result);
    });
});

app.delete('/delete/:id', (req, res) => {
    const { id } = req.params;

    let sql = "DELETE FROM games WHERE idgame = ?";

    db.query(sql, [id], (err, result) => {
        if (err) console.log(err);
        else res.send(result);
    });
});

app.listen(3001, () => {
    console.log("Rodando servidor na porta 3001");
});