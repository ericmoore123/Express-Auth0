exports.loginRoute = (req, res, next) => {
  // userData: JSON.stringify(req.oidc.user)
  res.oidc.login({ returnTo: `/user/profile` });
};
