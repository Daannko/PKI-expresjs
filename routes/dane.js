var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  req.app.locals.ii++;
  ii++;
  res.render('index', { title: 'Express' ,
                      global_var1: ii,
                      global_var2: req.app.locals.ii});
});

router.post('/', function(req, res, next){
    res.write("Imie = " + req.body.imie + "\n")
    res.write("Nazwisko = " + req.body.nazwisko)
    res.end();
});
router.get('/form', function(req, res, next){
  res.write("Imie = " + req.query.imie + "\n")
  res.write("Nazwisko = " + req.query.nazwisko)
  res.end();
});

module.exports = router;

