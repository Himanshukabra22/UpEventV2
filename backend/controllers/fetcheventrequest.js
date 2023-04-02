const eventModel = require('../models/event.model')

const fetcheventrequest = async(req,res) => {
    try {
        if(!req.user)
        {
            return res.status(400).send({message : "unauthorized access"})
        }
        let data = await eventModel.find({adminBody : { $exists : false } });
        if(data)
        {
            res.send(data);
        }
        else
        res.send({status:"not ok"})
    } catch (error) {
        console.log(error);
    }
}

module.exports = {fetcheventrequest}