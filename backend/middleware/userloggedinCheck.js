const userModel = require('../models/user.model')
const jwt = require('jsonwebtoken')

const userloggedinCheck = async (req, res,next) => {
    try {
    if(req.headers.authorization)
    {
      const token = req.headers.authorization;
      const user = jwt.verify(token, process.env.JWT_USER_SECRET_KEY);
      console.log(user);
      const {_id} = user;
      const userData = await userModel.findOne({_id});
      if (!userData) {
        res.status(400).send({ status: "not ok", msg: "user not found" });
      }
      const {username,email} = userData;
      req.user = {username,email,type:"user"};
      console.log(req.user);
    }
    }catch (error) {
      console.log(error);
    }
    next()
  };

  module.exports = {userloggedinCheck}