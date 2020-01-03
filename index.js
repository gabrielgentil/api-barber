const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()


const port = 3000


app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

require('./controllers/index')(app);

app.listen(port, function(){
  console.log(`logado ${port}`)
})
