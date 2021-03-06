if (process.env.NODE_ENV !== 'production') {
    require('dotenv/config')
}
console.log(process.env.SECRET_KEY)
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const passport = require('passport')
const path = require('path')
const app = express()
/*zviyfishpkucdaqpck@awdrt.org may@dodihome.com*/
const mongodburi = process.env.MONGODB_URI;
app.use(morgan('dev'))
app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/api/profile', require('./routers/profileRoute'))
app.use('/api/job', require('./routers/jobRoute'))
app.use(passport.initialize())
require('./passport')(passport)
app.get('/', (req, res) => {

    res.json({
        message: `Welcome To Our 
        Application`
    })
})
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`SERVER is RUNNING ON PORT ${PORT}`)
    mongoose.connect(mongodburi,
        { useNewUrlParser: true, useUnifiedTopology: true },
        () => {
            console.log('Database Connected...')
        });
})

