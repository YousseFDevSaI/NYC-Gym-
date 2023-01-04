const express = require('express');
const httpStatusCodes = require('http-status-codes');
const router = express.Router();


const user = require('../model/user.model');
const admin = require('../model/admin.model');




router.post('/login', (req, res) => {
  const { email, password } = req.body;

  admin.findOne({ email, password }).then((admin) => {
    if (admin) {
      // Set session cookie or token
      res.status(httpStatusCodes.ACCEPTED).send('Success');
    } else {
      res.status(httpStatusCodes.UNAUTHORIZED).send('Invalid email or password');
    }
  }).catch((error) => {
    res.status(httpStatusCodes.INTERNAL_SERVER_ERROR).send(error);
  });
});


router.get('/', (req, res) => {
    user.find().then(docs => {
    res.send(docs);
    }).catch(err => {
    res.status(httpStatusCodes.INTERNAL_SERVER_ERROR).send(err);
})

});



router.delete('/:id', (req, res) => {
    let id = req.params.id;
    user.findByIdAndDelete(id).then(docs => {
    res.send("User Deleted")
    }).catch(err => {
    res.status (httpStatusCodes.INTERNAL_SERVER_ERROR).send(err);
})

});

router.put('/:id', (req, res) => {
    let id = req.params.id;
    const obj = req.body;
    user.findByIdAndUpdate(id,{ name: obj.name, contact: obj.contact, address:obj.address , email:obj.email}, (err, doc) => {
    if (err)
    res.status (httpStatusCodes.INTERNAL_SERVER_ERROR).send(err);
    else
    res.status (httpStatusCodes.OK);
    });
});


module.exports = router;