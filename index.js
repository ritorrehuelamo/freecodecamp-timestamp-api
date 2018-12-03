const express = require('express')
const bodyParser = require('body-parser')
const helmet = require('helmet')

const app = express()

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use(helmet())

app.route('/api/timestamp/:date_string').post((req, res) => {
  const {date_string} = req.params
  let date = new Date(parseInt(date_string))
  date = date.toUTCString()

  if(date !== 'Invalid Date') {
    res.json({unix: date_string, utc: date})
  } else {
    res.status(500).json({error: 'Invalid data'})
  }
})

app.listen(3000, () => {
  console.log('Server running on port 3000')
})