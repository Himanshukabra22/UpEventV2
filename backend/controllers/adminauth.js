const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const adminModel = require("../models/admin.model");

const Login = async (req, res) => {
  try {
    const {username, password}=req.body;
    const admin = await adminModel.findOne({username});
    if (!admin) {
      return res.status(400).send({ status: "not ok", msg: "admin not found" });
    }
    const match = await bcrypt.compareSync(password,admin.password);
    if(match){
        const { _id} = admin;
        const token = jwt.sign({ _id, username }, process.env.JWT_ADMIN_SECRET_KEY);
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
    const {name, username, password : plainTextPassword, email, key} = req.body;
    if(key !== process.env.CREATE_ADMIN_SECRET_KEY)
    {
      return res.status(400).send({ status: "not ok", msg: "user not created" });
    }
    const salt = bcrypt.genSaltSync(10);
    const password = bcrypt.hashSync(String(plainTextPassword), salt);
    const admin = await adminModel.create({name, username, password, email});
    if (!admin) {
      return res.status(400).send({ status: "not ok", msg: "admin not created" });
    }
    return res.status(200).send({ status: "ok", msg: "admin created" });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { Register, Login };
