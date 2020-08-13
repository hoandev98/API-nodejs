const express = require('express');
const cors = require("cors");
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');

const connection = new Sequelize('node-api', 'hoannguyen', '1', {
  host: 'localhost',
  port: 3306,
  dialect: 'mysql',
});

const userRouter = require('./routes/user.route');

connection.authenticate().then(() => {
  const app = express();
  app.use(cors());
  app.use([
    bodyParser.json(),
    bodyParser.urlencoded({
      extended: true,
    }),
  ]);
  app.get('/', (req, res) => {
    res.send('Hello World');
  });

  app.use(userRouter);

  const PORT = process.env.PORT || 8082;

  app.listen(PORT, () => {
    console.log(`Server is running in http://localhost:${PORT}`);
  });
}).catch((error) => {
  console.error(error, 'error connecting to db');
});
