const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const path = require('path')
const PORT = process.env.PORT || 5000

//so that server.js can find items.js for the api routes
const items = require('./routes/api/items');

const app = express()


// Middleware for BodyParser
app.use(bodyParser.json());


//Create a database variable outside of the database connection callback to reuse the connection pool in your app.
var db;

// Connect to the database before starting the application server.
mongoose.connect(process.env.MONGODB_URI)

//Now we want to be able to interact with our API
//(1) Get | (2) Post | (3) Delete
//Use Routes
// Anything that goes to /api/items should refer to the items variable defined earlier
app.use('/api/items', items)

app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.get('/', (req, res) => res.render('pages/index'))
app.get('/report', (req, res) => res.render('pages/reportpage'))   
app.get('/login', (req, res) => res.render('pages/login'))
app.get('/adminpage', (req, res) => res.render('pages/adminpage'))

app.listen(PORT, () => console.log(`Listening on ${ PORT }`))


