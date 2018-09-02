const express = require('express');
const bcrypt = require('bcrypt');

const User = require('../models/user');

const router = express.Router();

router.post('/signup', (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            const user = new User({
                email: req.body.email,
                password: hash
            });
            user.save()
                .then(result => {
                    res.status(201).json({
                        message: 'User created successfully!',
                        result: result
                    });
                })
                .catch(err => {
                    res.status(500).json({
                        error: err
                    });
                });
        });
});

router.post('/login', (req, res, next) => {
    User.findOne({ email: req.body.email}).then(user => {
        if (!user) {
            return res.status(401).json({
                message: 'Unauthorized!'
            });
        }
        return bcrypt.compare(req.body.password, user.password);
    })
    .then(result => {
        if (!result) {
            return res.status(401).json({
                message: 'Unauthorized!'
            });
        }
        
    })
    .catch(err => {
        res.status(401).json({
            message: 'Unauthorized!'
        });
    });
})

module.exports = router;