const express = require("express");
const router = express.Router();

const {eventrequest} = require('../controllers/eventrequest')
const {loggedinCheck} = require('../middleware/loggedinCheck')


router.route('/admin/request').post(loggedinCheck,eventrequest)

module.exports = router;