const cookieSession = require('cookie-session');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login');
});

router.post('/', function(req, res, next){
    var login = req.body.login;
    var pass = req.body.password;
    
  
    console.log(login,pass)
    if((login && pass))
    {
      if( login == "admin" && pass == "test"){

        req.session.logged = 1;
        req.session.views = 0;
        req.session.name = "TomekAdmin"
      }
      else if( login == "user" && pass == "test"){
        req.session.logged = 1;
        req.session.views = 0;
        req.session.name = "AdamUser"
      }
      else
      {
        throw new Error('Not logged in');
      }
    }

    res.redirect('/');

    res.end();
});
router.get('/form', function(req, res, next){
  res.write("Imie = " + req.query.imie + "\n")
  res.write("Nazwisko = " + req.query.nazwisko)
  res.end();
});

module.exports = router;

