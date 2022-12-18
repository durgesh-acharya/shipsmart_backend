const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

const port = process.env.PORT  || 5001;
const router = express.Router();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false})); 

const associateRouter = require('./routes/associate')


app.use(associateRouter);

app.get('/', (req, res) => {
  res.send('Shree Jay Ambe!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
