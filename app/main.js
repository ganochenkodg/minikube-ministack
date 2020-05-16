var express = require('express');
var router = express.Router();
var app = express();
var cors = require('cors');
app.use(cors());
app.use('/', router);
const bgcolor = "#" + Math.random().toString(16).slice(2, 8);

router.get('/', async (req, res) => {
  res.send('<body bgcolor="'+bgcolor+'">Hello World from '+process.env.HOSTNAME+'! Env:'+process.env.ENVIRONMENT+'</body>');
});

router.get('/health', function (req, res, next) {
  res.json({status: 'Healthy'});
});

router.get('/liveness', function (req, res, next) {
  res.json({status: 'Live'});
});

app.listen(3000, function() {
  console.log('App succesfully running!');
});
