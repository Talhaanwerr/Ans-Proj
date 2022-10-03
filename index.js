const mysql = require('mysql');
const express = require("express")

const app = express()
const port = process.env.PORT || 5000

app.listen(port, () => console.log(`listen ${port}`))


const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '12345678',
  database: 'ans-proj'
});

// console.log("connection: ", connection)

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL Server!');
});