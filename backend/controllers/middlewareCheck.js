const middlewareCheck = async (req, res) => {
    try {
      if(req.user){
        const {username,email} = req.user;
          return res.status(200).send({status: "ok",body:{username,email}});
      }
      else{
          return res.status(400).send({ status: "not ok" });
      }
    } catch (error) {
      console.log(error);
    }
  };

module.exports = {middlewareCheck}