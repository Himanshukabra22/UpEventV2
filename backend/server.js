const express = require("express");
const app = express();
const cors = require("cors");
const authRoutes = require("./routes/auth");
const eventrequestRoutes = require("./routes/eventrequest");

// const userDataRoutes = require("./routes/user.data");
// const tradeRoutes = require("./routes/trade");
// const predictionRoutes = require("./routes/prediction");

const dbconnect = require("./db/dbconnect.js");

require("dotenv").config();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


app.use(authRoutes);
app.use(eventrequestRoutes);

// app.use("/api/v1", userDataRoutes);
// app.use("/api/v1", tradeRoutes);
// app.use("/api/v1", predictionRoutes);

// let ans="";

// app.post("/register",Register)

const serverStart = async () => {
  try {
    await dbconnect(process.env.MONGO_URI);
    console.log("Connected to the DB");
    app.listen(PORT, () => {
      console.log(`http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};
serverStart();
