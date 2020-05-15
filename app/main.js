var express = require('express');
var router = express.Router();
var app = express();
var cors = require('cors');
app.use(cors());
app.use('/', router);

router.get('/', async (req, res) => {
  res.send('Hello TR Logic!');
})

app.listen(3000, function() {
  console.log('App succesfully running!');
});
