exports.homeRoute = (req, res, next) => {
    res.status(200).render("home", {
        userData: req.oidc.user,
        loggedIn: req.oidc.isAuthenticated() ? true : false,
        loginMessage: req.oidc.isAuthenticated() ? "Logged in" : "Logged out"
      });
};