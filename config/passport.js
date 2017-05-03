const knex = require('../knex');
const passport = require('passport');
// const Users = require('')
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const configAuth = require('./auth');
// Use the GoogleStrategy within Passport.
//   Strategies in Passport require a `verify` function, which accept
//   credentials (in this case, an accessToken, refreshToken, and Google
//   profile), and invoke a callback with a user object.
// const findOrCreateBy = (email) => {
//   const API_URL = /*base_url*//
// }

passport.use(new GoogleStrategy({
  clientID: configAuth.googleAuth.clientID,
  clientSecret: configAuth.googleAuth.clientSecret,
  callbackURL: configAuth.googleAuth.callbackURL,
},
  function (accessToken, refreshToken, profile, done) {
    // create a function that searches for google ID or makes one up
    // User in this case is whatever variable you declared that can interface with the User table.
    // User.findOrCreate({ 'googleId': profile.id }, (err, user) => {
    //   if (err) {
    //       return done(err);
    //   }
    //   //No user was found... so create a new user with values from Facebook (all the profile. stuff)
    //   if (!user) {
    //     user = new User({
    //       name: profile.displayName,
    //       email: profile.emails[0].value,
    //       username: profile.username,
    //       provider: 'facebook',
    //       //now in the future searching on User.findOne({'facebook.id': profile.id } will match because of this next line
    //       facebook: profile._json
    //     });
    //     user.save(function(err) {
    //       if (err) console.log(err);
    //       return done(err, user);
    //     });
    //   } else {
    //     //found user. Return
    //     return done(err, user);
    //   }
    // });
    process.nextTick(() => {

    })
  }
));

passport.serializeUser((object, done) => {
  done(null, {token: object.token, id: object.profile.id })
});

passport.deserializeUser((object, done) => {
  User.findById(object.id).then((user) => {
    done(null, user);
  });
});
