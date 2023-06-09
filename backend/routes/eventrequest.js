const express = require("express");
const router = express.Router();

const {eventrequest} = require('../controllers/eventrequest')
const {userloggedinCheck} = require('../middleware/userloggedinCheck')


router.route('/admin/request').post(userloggedinCheck,eventrequest)

module.exports = router;