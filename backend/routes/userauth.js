const express = require("express");
const router = express.Router();

// const {middlewareCheck} = require("../controllers/middlewareCheck");
const { Register, Login } = require("../controllers/userauth");
// const {loggedinCheck} = require('../middleware/userloggedinCheck')

router.route("/register").post(Register);
router.route("/login").post(Login);

//Below route can only be accessed if jwt token is attached as Authorization in headers of request.
//The middleware will attach username and email if the user is logged in due to below line.
// return res.status(200).send({status: "ok",body:{username,email}});

// router.route('/middlewareCheck').post(loggedinCheck,middlewareCheck);

module.exports = router;