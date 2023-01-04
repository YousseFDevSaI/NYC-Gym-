const express = require('express');
const httpStatusCodes = require('http-status-codes');
const router = express.Router();

const user = require('../model/user.model');


router.post('/signup', (req, res) => {
    
    const obj = req.body;
    user.create(obj).then(doc => {
    res.status (httpStatusCodes.CREATED).send( `Welcome ${req.body.name}`);
    }).catch(err => {
    res.status (httpStatusCodes.INTERNAL_SERVER_ERROR).send(err);
    }).then(console.log(' New User Added'))


});
router.post('/login', (req, res) => {
    const { email, password } = req.body;
    
    user.findOne({ email, password }).then(user => {
        if (user) {
            res.status(httpStatusCodes.ACCEPTED).send(`Welcome ${user.name} !`)
        } else {
        res.send(`Login Failed`)
        }
});
});

module.exports = router;