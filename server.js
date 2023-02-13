const express = require('express')
const app = express();
const mongoose = require('mongoose')
const expressLayouts = require('express-ejs-layouts')
const dotenv = require('dotenv').config()

const indexRouter = require('./routes/index')


app.listen(process.env.PORT || 3000);
app.set("view engine", "ejs")
app.set('views', __dirname + "/views")
app.set("layout", "layouts/layout")
app.use(express.static('public'))
app.use(expressLayouts)

app.use('/', indexRouter)

connectToDb();

function connectToDb() {
    const connectionParams={
        useUnifiedTopology: true 
    }
    mongoose.connect(process.env.DATABASE_URL, {auth: {
        username: "Erik",
        password: "?%!W00tt!!"
    },
    },connectionParams)
        .then( () => {
            console.log('Connected to the database ')
        })
        .catch( (err) => {
            console.error(`Error connecting to the database. n${err}`);
        })
} 


