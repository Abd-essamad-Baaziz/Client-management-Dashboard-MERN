import express from 'express'
// body-parser for parsing the Data coming in
import bodyParser  from 'body-parser'
// monggose for handling mongodb calss
import mongoose from 'mongoose'
// cors for cross-origin reaserch sharing
import cors from 'cors'
// dotenv for envirement variables
import dotenv from 'dotenv'
// helmet for protecting our APIs
import helmet from 'helmet'
// morgan for login our APIs Calls
import morgan from 'morgan'
// import To our Routes
import userRoutes from './routes/user.js'
import fundManagementRoutes from './routes/funds.js'
import processingLoanRoutes from './routes/loans.js'
import ReserveBookRoutes from './routes/reservation.js'

/* import Data */
import User from './models/User.js';
import Book from './models/Book.js'
// import BookStat from './models/BookStat.js'
import { dataUser, dataBook, dataBookStat } from './data/index.js'

/* CONFIGURATION */
dotenv.config() // so we can setup our envirement variables 
const app = express()
app.use(express.json()) // envoke our app
app.use(helmet())
// this allow us to make cross sharing origin requests and it's something we need to make API CALLS from another server
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin'})) 
app.use(morgan("common"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cors())

/** ROUTES */
app.use('/user', userRoutes)
app.use('/funds', fundManagementRoutes)
app.use('/loans', processingLoanRoutes)
app.use('/reservation', ReserveBookRoutes)
app.use('/book', bookRoutes)

/** DB CONNECTION */
mongoose.set('strictQuery', false);
const PORT = process.env.PORT || 9000
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then(() => {
    app.listen(PORT, () =>  console.log(`Listening on port ${PORT}`))

        /* ONLY ADD DATA ONE TIME */
        // User.insertMany(dataUser);
        Book.insertMany(dataBook);
        // BookStat.insertMany(dataBookStat);

}).catch((err) => console.log(`${err} did not connect`))
