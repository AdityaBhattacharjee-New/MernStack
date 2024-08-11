require("dotenv").config();
const express = require("express");
const app = express();
const authRoute = require("./router/auth-router.js");
const contactRoute = require("./router/contact-router.js");
const connectDB = require("./utils/db.js");
const errorMiddleware = require("./MODELS/error-middleware.js");
app.use(express.json());
const PORT = 5000;
app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);
// app.get("/", (req, res) => {
//   res.status(200).send("Welcome to Adityas codelabs");
// });
app.use(errorMiddleware);
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running at port: ${PORT}`);
  });
});
