const express = require('express');
const passport = require('passport');

const router = express.Router();

router.get('/auth/google',
  passport.authenticate('google', { state: 'SOME STATE' }),
  function (req, res) {
    // The request will be redirected to LinkedIn for authentication, so this
    // function will not be called.
  });

router.get(
  '/google/callback',
  passport.authenticate('google', {
    successRedirect: '/profile',
    failureRedirect: '/',
  }),
function (req, res) {
  res.redirect('/');
});

router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});
