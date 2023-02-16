//express framework for handling our APIs
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
import clientRoutes from './routes/client.js'
import generalRoutes from './routes/general.js'
import managementRoutes from './routes/management.js'
import salesRoutes from './routes/sales.js'

//data imports
import User from './models/User.js'
import { dataUser } from './data/index.js'
import Product from './models/Product.js'
import { dataProduct } from './data/index.js'

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
app.use('/client', clientRoutes)
app.use('/general', generalRoutes)
app.use('/management', managementRoutes)
app.use('/sales', salesRoutes)

/** MONGOOSE SETUP */
mongoose.set("strictQuery", true);
const PORT = process.env.PORT || 9000
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then(() => {
    app.listen(PORT, () => console.log(`server connected to the port ${PORT}`));

    /* ONLY ADD DATA ONE TIME */
    // User.insertMany(dataUser);
    // Product.insertMany(dataProduct)
}).catch((err) => console.log(`${err} did not connect`))
