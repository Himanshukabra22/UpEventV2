const express = require("express");
const router = express.Router();

const {fetcheventrequest} = require('../controllers/fetcheventrequest')
const {adminloggedinCheck} = require('../middleware/adminloggedinCheck')


router.route('/admin/fetchevents').post(adminloggedinCheck,fetcheventrequest)

module.exports = router;