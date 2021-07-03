const jwt = require("jsonwebtoken");

// middleware to make sure the user is logged in-

exports.loginRequired = (req, res, next) => {
  try {
    console.log(req);
    const token = req.headers.split(" ")[1];
    jwt.verify(token, process.env.SECRET_KEY, function (err, payload) {
      // if payload exists the user is logged in
      if (payload) {
        next();
      } else {
        next({
          // unauthorized
          status: 401,
          message: "login first! ",
        });
      }
    });
  } catch (e) {
    next({
      status: 401,
      message: "please login first " + e.message,
    });
  }
};

// ensure the user is the correct one
exports.ensureCorrectUser = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, process.env.SECRET_KEY, (error, payload) => {
      if (payload && payload.id === req.params.id) {
        return next();
      } else {
        next({
          status: 401,
          message: "Unauthorized " + e.message,
        });
      }
    });
  } catch (err) {
    next({
      status: 401,
      message: "Unauthorized " + e.message,
    });
  }
};
