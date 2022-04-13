var express = require('express');
const app = require('../app');
var router = express.Router();
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

var i = 0;
var login;
var pass;

router.get('/', function(req, res, next) {

  i++;
  req.app.locals.ii++;
  ii++;

  if(req.session.logged){
    req.session.views = (req.session.views || 0) + 1;
  }
  console.log(req.session.log)
  
  res.render('index', { title: 'Express' ,
                        local_var: i,
                        global_var1: ii,
                        global_var2: req.app.locals.ii,
                        name:req.session.name,
                        visited: req.session.views,
                        temp: req.session.logged
                        });
  res.end();
});

router.get('/logout', function(req, res, next) {

    req.session = null;
    res.redirect('/');
  });

  router.get('/chat', function(req, res, next) {
    req.session = null;
    res.redirect('/chat/');
  });

router.post("/upload", function (req, res) {

  // When a file has been uploaded
  if (req.files && Object.keys(req.files).length !== 0) {
    
    // Uploaded path
    const uploadedFile = req.files.uploadFile;
    // Upload path
    const uploadPath = __dirname
        + "\\..\\uploads\\" + uploadedFile.name;
    // To save the file using mv() function

    uploadedFile.mv(uploadPath, function (err) {
      if (err) {
        console.log(err);
        res.send("Failed !!");
      } else res.send("Successfully Uploaded !!");
    });
  } else res.send("No file uploaded !!");
});


router.get("/download", function (req, res) {
  
  // The res.download() talking file path to be downloaded
  res.download("D:\\Projekty vscode\\PKI-expresjs\\uploads\\"+ req.query.path,function (err) {
    if (err) {
      console.log(err);
    }
  });
});
module.exports = router;
