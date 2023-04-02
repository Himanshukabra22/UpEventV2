const express = require("express");
const router = express.Router();

const {permitevent} = require('../controllers/permitevent')
const {adminloggedinCheck} = require('../middleware/adminloggedinCheck')


router.route('/admin/permitevent').patch(adminloggedinCheck,permitevent)

module.exports = router;