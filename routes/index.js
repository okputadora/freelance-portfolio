var express = require('express');
var router = express.Router();
var sgMail = require('@sendgrid/mail');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/:page', function(req, res, next){
  var page = req.params.page
  res.render(page)
})

router.post('/:action', function(req, res, next){
  if (req.params.action === "inquiry"){
    var params = req.body
    console.log(params)
  }
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  const msg = {
    to: 'mmcveigh33@gmail.com',
    from: params.email,
    subject: params.subject,
    text: params.message
  }
  console.log(msg)
  sgMail.send(msg, function(error, result){
    if (error){
      console.log("error")
      console.log(error)
      return
    }
    else{
      console.log("success")
    }
  })
  res.redirect('/confirmation');
})

module.exports = router;
