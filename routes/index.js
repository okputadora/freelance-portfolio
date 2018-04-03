var express = require('express');
var router = express.Router();
var sgMail = require('@sendgrid/mail');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/:page', function(req, res, next){
  console.log("redirecting")
  var page = req.params.page
  console.log(page)
  if (page == "inquiry"){
    next()
    return
  }
  res.render(page)
})

router.post('/:action', function(req, res, next){
  if (req.params.action === "inquiry"){
    var params = req.body
    console.log(params)
  }
  // sgMail.setApiKey(AWS_SENDGRID_API_KEY)
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
      res.redirect('/confirmation');
      return
    }
    else{
      console.log("success")
      res.redirect('/confirmation');
    }
  })
})

module.exports = router;
