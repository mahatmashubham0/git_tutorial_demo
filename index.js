const express = require("express");
// import taskRouter from "./routes/task.js";
const env = require("dotenv");
const cors = require("cors");
const DBConnection = require('./src/config/DBConnection')

const app = express();
env.config();
const port = process.env.PORT || 3000;

// Using Middlewares
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

DBConnection();

// Using routes
// app.use("/api/v1/",);

app.get("/", (req, res) => {
  res.send("Nice working");
});


app.listen(port,() => {
   console.log(`Server is running on port ${port}`);
})
