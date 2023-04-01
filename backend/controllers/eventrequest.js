const eventModel = require("../models/event.model");

const eventrequest = async (req, res) => {
  try {
    const data = {
      userBody: {
        username: req.body.userBody.username,
        email: req.body.userBody.email
      },
      eventBody: 
      {title: req.body.eventBody.title,
        college:req.body.eventBody.college,
        posterUrl:req.body.eventBody.posterUrl,
        type:req.body.eventBody.type,
        about:req.body.eventBody.about,
        venue:req.body.eventBody.venue,
        links: {
          website:req.body.eventBody.links.website,
          register:req.body.eventBody.links.register,
          instagram: req.body.eventBody.links.instagram,
          linkedin: req.body.eventBody.links.linkedin
        }
      }}
    const event = await eventModel.create(data);
    if (!event) {
      return res.status(400).send({ status: "not ok", msg: "event request not created" });
    }
    return res.status(200).send({ status: "ok", msg: "event request created" });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {eventrequest};
