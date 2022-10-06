const mysql = require('mysql');
const express = require("express")
const cors = require('cors')
const routes = require('./router/routes')
var expressBusboy = require('express-busboy');
// import './src/config/db.config.js'
// import routes from './src/router/routes.js'


const app = express()
const port = process.env.PORT || 5000

expressBusboy.extend(app);
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use('/api', routes)
app.route('/').get((req, res) => res.send("Application is Running..."))
app.get('*', (req, res) => res.send('404! This is an invalid URL.'));


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


