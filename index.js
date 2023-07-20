/**
 * हामीलाई चाहिने प्याकेगेसहरु हामीले येहा import गरेको छौ 
 * express ले हामीलाई server बनाउन हेल्प गर्छ 
 * bodyparser ले हामीलाई body मा भाको data लाइ निकाल्ने काम गर्छ 
 * mongoose ले हामीलाइ schema बनाउन अनि database संग जोड्ने काम गर्छ
 */
require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const userRoutes = require('./routes/user-routes');

/** 
 * येहा हामीले express server बनायेउ जसलाई हामीले server भन्ने variable मा store गरेका छौ   
 */
const server = express()

// Body parser middleware should be up in the stack

server.use(bodyParser.json())

server.use('/user',userRoutes);

// server.use(express.urlencoded({extended:true})) 

/**
 * येहा हामीले mongooseबाट database मा जोड्ने काम गरेका छौ मोंगूसे.
 * .connect मा दुई parameter छन्। पहिलो parameter मा हामीले जो database बनाएका छौ त्यो दिएको छ।
 */
// mongoose.connect("mongodb+srv://sanjay:12345@cluster0.sa4sbyc.mongodb.net/sg-backend-class?retryWrites=true&w=majority")
// .then(() => console.log('MongoDB connected'))

mongoose.connect(process.env.MONGOURL)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));



// mongoose.connect("mongodb://localhost:27017/sg-backend-class")
//   .then(() => console.log("Database connected successfully"))
//   .catch(err => console.log(err));





server.listen(5000)
console.log('Server started successfully');