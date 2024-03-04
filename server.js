const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });
const app = require("./app");

console.log(process.env.NODE_ENV);
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connected succefully"));

// const testTour = new Tour({
//   name: "hello at ss",
// });

// testTour
//   .save()
//   .then((doc) => console.log(doc))
//   .catch((err) => console.log("Error 🔥: ", err));

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Hello from port: ${port}`);
});
