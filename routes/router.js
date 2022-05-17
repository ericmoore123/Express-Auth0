const express = require('express')
const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('home', {userData: JSON.stringify(req.oidc.user) ,message: req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out'});
}); 

module.exports = router;