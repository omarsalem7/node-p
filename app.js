const express = require("express");
const morgan = require("morgan");

const app = express();
app.use(express.json());

if (process.env.NODE_ENV == "development") {
  app.use(morgan("dev"));
}

const tourRouter = require("./routes/tour.route");
const userRouter = require("./routes/user.route");

app.use("/api/v1/tours", tourRouter);
app.use("/api/v1/users", userRouter);

module.exports = app;
