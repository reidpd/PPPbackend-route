const jwt = require('jsonwebtoken');

function middlewareVerify(req, res, next){
  // console.log("what is cookie?", req.headers);
  jwt.verify(req.headers.cookie.substring(6), process.env.JWT_KEY, (err, payload) => {
    if (err) {
      res.status(401);
      res.send({ status: 401, ErrorMessage: 'Unauthorized' });
    }
    else {
      tokenId = payload.userId;
      next();
    }
  });
}

module.exports = {
  middlewareVerify: middlewareVerify,
}
