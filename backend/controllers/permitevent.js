const eventModel = require('../models/event.model')

const permitevent = async(req,res) => {
    try {
        if(!req.user)
        {
            return res.status(400).send({message : "unauthorized access"})
        }
        const id = req.body.id;
        const eventlink = req.body.eventlink;
        // console.log(id);
        let data = await eventModel.updateOne({_id:id},{
            $set : {
                adminBody: {
                    display:true,
                    eventlink:eventlink
                }
            }
        });
        console.log(data);
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

module.exports = {permitevent}