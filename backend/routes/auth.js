const express = require("express");
const router = express.Router();
const { Register, Login } = require("../controllers/auth");
const {middlewareCheck} = require("../controllers/middlewareCheck");
const {loginCheck} = require('../middleware/loggedinCheck')

router.route("/register").post(Register);
router.route("/login").post(Login);

//Below route can only be accessed if jwt token is attached as Authorization in headers of request.
//The middleware will attach username and email if the user is logged in due to below line.
// return res.status(200).send({status: "ok",body:{username,email}});

router.route('/middlewareCheck').post(loginCheck,middlewareCheck);

module.exports = router;