const express = require('express')
const app = express();
const dotenv = require('dotenv');
const handlebars = require('express-handlebars');
const router = require('./routes/router');
const { auth } = require('express-openid-connect');

const config = {
    authRequired: false,
    auth0Logout: true,
    secret: 'aadjwidnowndaiondoinawiodnaoihwdoiawfouhaw',
    baseURL: 'http://localhost:8080',
    clientID: 'Pqd6Lp8wYNgSf1FrclK3CRyhdlho1Xfz',
    issuerBaseURL: 'https://dev-lgvyzftj.us.auth0.com'
  };
  
//  Auth router attaches /login, /logout, and /callback routes to the baseURL
//  Handles user authenication entirely externally
app.use(auth(config));

app.engine('hbs', handlebars.engine({
    extname: 'hbs' //Set .hbs instead of .handlebars
}));
app.set('view engine', 'hbs');

app.use(router);

dotenv.config();
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log('listening on port: ', PORT);
})