exports.loginController = (req, res, next) => {
    // userData: JSON.stringify(req.oidc.user)
    res.render('home', {userData: req.oidc.user ,message: req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out'});
};