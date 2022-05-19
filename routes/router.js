const express = require('express')
const router = express.Router();
const { homeRoute } = require('../controllers/publicRoutesController');
const { loginRoute } = require('../controllers/loginController');
const { requiresAuth } = require('express-openid-connect');

router.get('/', homeRoute); 
router.get('/login', loginRoute);
router.get('/user/profile', requiresAuth(), (req, res) => {
    res.send('Hello, ' + req.oidc.user.nickname)
});
router.get('/user', requiresAuth(), (req, res, next) => { res.send('Authenticated!')}); 

module.exports = router;

