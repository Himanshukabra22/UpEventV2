const userModel = require('../models/admin.model')
const jwt = require('jsonwebtoken')

const adminloggedinCheck = async (req, res,next) => {
    try {
    if(req.headers.authorization)
    {
      const token = req.headers.authorization;
      const admin = jwt.verify(token, process.env.JWT_ADMIN_SECRET_KEY);
    //   console.log(user);
      const {_id} = admin;
      const adminData = await adminModel.findOne({_id});
      if (!adminData) {
        res.status(400).send({ status: "not ok", msg: "user not found" });
      }
      const {username,email} = userData;
      req.user = {username,email,type:"admin"};
      console.log(req.user);
    }
    }catch (error) {
      console.log(error);
    }
    next()
  };

  module.exports = {adminloggedinCheck}