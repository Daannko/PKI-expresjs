var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/:userName', function(req, res, next){
    res.write(req.params.userName)
});
router.get('/form/:userName', function(req, res, next){
    res.write(req.params)
});

module.exports = router;
