const tempModel = require('../models/user.model')
const jwt = require('jsonwebtoken')

const loggedinCheck = async (req, res,next) => {
    try {
    if(req.headers.authorization)
    {
      const token = req.headers.authorization;
      const user = jwt.verify(token, process.env.SECRET_KEY);
      console.log(user);
      id = user._id;
      const userData = await tempModel.findOne({_id:id});
      if (!userData) {
        res.status(400).send({ status: "not ok", msg: "user not found" });
      }
      req.user = userData;
    }
    }catch (error) {
      console.log(error);
    }
    next()
  };

  module.exports = {loggedinCheck}