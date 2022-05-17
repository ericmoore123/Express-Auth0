const express = require('express')
const router = express.Router();

router.get('/', (req, res, next) => {
    res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
}); 

module.exports = router;