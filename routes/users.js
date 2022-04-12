var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.write("wynik getMethod():"+req.method + "\n");
  res.write("wynik getAddr():"+req.ip + "\n");
  res.write("wynik getServerName():"+req.hostname + "\n");
  res.write("wynik get():"+req.headers['accept'] + "\n");

  res.end();
});

router.get('/:userName/:userAge', function(req, res, next) {
  res.write(req.params.userName + "\n");
  res.write(req.params.userAge + "\n");

  res.end();
});

router.get('/cool', function(req, res, next) {
  res.render('index', { title: 'You\'re so cool' });
});

module.exports = router;
