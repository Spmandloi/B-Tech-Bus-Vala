let express = require('express');
let mongoose = require('mongoose');
let cors = require('cors');
let bodyParser = require('body-parser');

// Express Route
const busRoute = require('../backend/routes/student.route')
// const userRoute = require('../backend/routes/userRoutes')
const AuthRoute = require('./routes/auth')

// Connecting mongoDB Database
mongoose
  .connect('mongodb://127.0.0.1:27017/bus_List')
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch((err) => {
    console.error('Error connecting to mongo', err.reason)
  })

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cors());
app.use('/busList', busRoute)
// app.use('/users', userRoute)
app.use('/users' ,AuthRoute )

app.use(express.json()); // Parse JSON request bodies

// PORT
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log('Connected to port ' + port)
})

// 404 Error
app.use((req, res, next) => {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
