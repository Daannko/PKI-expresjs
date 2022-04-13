const cookieSession = require('cookie-session');
var express = require('express');
var router = express.Router();
const messages = []
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('messages',{tab: messages});
});

router.get('/send', function(req, res, next){

    if(req.session.name == null)
        var name ="Anon";
    else
        var name = req.session.name
    messages.push(name+": "+req.query.message)
    res.redirect("/messages")
});

module.exports = router;

