const express = require('express');
const bodyParser = require('body-parser');
const router = require('app/routes/router');

const app = express();

app.use(bodyParser.json());
app.use('/', router);

app.listen(process.env.PORT || 3000, () => {
  console.log(`Listening on: ${process.env.PORT}`);
});





