const express = require("express");
const cors = require('cors')
require('dotenv').config()
const bodyParser = require('body-parser')
const userRouter = require('./routers/users')

const app = express();
const PORT = 5000;

app.use(cors())
app.use(bodyParser())

app.listen(5000, () => {
  console.log(`Server started on port ${PORT}`);
});

app.use('/users', userRouter)

