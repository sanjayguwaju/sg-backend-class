const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const userRoutes = require('./routes/user-routes');

const server = express()

mongoose.connect("mongodb+srv://sanjay:12345@cluster0.sa4sbyc.mongodb.net/sgBackendClass?retryWrites=true&w=majority")
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));


server.use(bodyParser.json())
server.use('/user',userRoutes);

// server.get('/kushal',function (req, res) {
//   res.send('Hello Kushal')
// })
// server.get('/sanjay',function (req, res) {
//     res.send('Hello sanjay')
  
// })

server.post('/kushal', function (req, res) {
    // if (!req.body) {
    // return res.status(400).send('Missing request body')
    // }

    // console.log('Received request:', req.body)

    res.json(req.body)
})

server.listen(5000)