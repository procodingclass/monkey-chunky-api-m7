const express = require('express')

const app = express()

const cors = require('cors');
// Use this to allow CROS request. Add domain of the hosted frontend app.
app.use(cors({
  origin: 'https://snack-web-player.s3.us-west-1.amazonaws.com'
}));

app.get('/', (req, res) => {
  res.send('Hello!')
})

app.use(express.json())
app.use('/api/getData', require('./routes/getData'))

app.listen(process.env.PORT || 3000, () => {
  console.log(`Example app listening on port ${process.env.PORT || 3000}`)
})  