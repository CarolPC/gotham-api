require('dotenv').load();
const express = require('express');
const bodyParser = require('body-parser');
const errorHandler = require('./error-handler');
const router = require('./routes/router');

const app = express();

app.use(bodyParser.json());
app.use('/', router);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Listening on: ${PORT}`);
});
