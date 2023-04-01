const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const tempModel = require("../models/temp");

const Login = async (req, res) => {
  try {
    const {username, password}=req.body;
    const user = await tempModel.findOne({username});
    if (!user) {
      return res.status(400).send({ status: "not ok", msg: "user not found" });
    }
    const match = await bcrypt.compare(password,user.password);
    if(match){
        const { _id} = user;
        const token = jwt.sign({ _id, username }, process.env.SECRET_KEY);
        return res.status(200).send({ status: "ok", token });
    }
    else{
        return res.status(400).send({ status: "not ok" });
    }
  } catch (error) {
    console.log(error);
  }
};

const Register = async (req, res) => {
  try {
    const {name, username, password : plainTextPassword, email} = req.body;
    const salt = bcrypt.genSaltSync(10);
    const val = String(plainTextPassword);
    const password = bcrypt.hashSync(val, salt);
    const user = await tempModel.create({name, username, password, email});
    if (!user) {
      return res.status(400).send({ status: "not ok", msg: "user not created" });
    }
    return res.status(200).send({ status: "ok", msg: "user created" });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { Register, Login };
