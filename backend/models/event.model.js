const mongoose = require("mongoose");
const eventSchema = new mongoose.Schema(
  {
    userBody: {
      username: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
    },
    eventBody: {
      title: {
        type: String,
        required: true,
      },
      college: {
        type: String,
        // unique: true,
        required: true,
      },
      posterUrl: {
        type: String,
        unique: true,
        required: true,
      },
      type: {
        type: String,
        // unique: true,
        required: true,
      },
      about: {
        type: String,
        // unique: true,
        required: true,
      },
      venue: {
        type: String,
        // unique: true,
        required: true,
      },
      //   lastdate:{
      //     type: Date,
      //     // unique: true,
      //     required: true
      //   },
      links: {
        website: {
          type: String,
          // unique: true,
          required: true,
        },
        register: {
          type: String,
          // unique: true,
          required: true,
        },
        instagram: {
          type: String,
          unique: true,
          required: true,
        },
        linkedin: {
          type: String,
          unique: true,
          required: true,
        },
        // whatsapp:{
        //     type: String,
        //     unique: true,
        //     required: true
        // }
      }
    },
    adminBody : {
      display : {
        type : Boolean,
      },
      eventlink : {
          type : String
      }
    }
  },
  {
    collection: "eventData",
  }
);

module.exports = mongoose.model("eventData", eventSchema);

// Requesters info
// Poster image
// Other images
// Event Title
// About event
// Date and venue of event
// Expiry of event
// College
// Type of event
// Eligibility
// Application link
// Website
