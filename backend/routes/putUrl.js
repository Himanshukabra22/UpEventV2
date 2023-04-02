const express = require("express");
const router = express.Router();


const {userloggedinCheck} = require('../middleware/userloggedinCheck')
const {generateUploadURL} = require('../controllers/S3/putUrl')


router.route('/s3Url').post(userloggedinCheck,generateUploadURL)

module.exports = router;