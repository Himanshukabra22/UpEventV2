const express = require("express");
const router = express.Router();

const { Register, Login } = require("../controllers/adminauth");

router.route("/admin/register").post(Register);
router.route("/admin/login").post(Login);

module.exports = router;