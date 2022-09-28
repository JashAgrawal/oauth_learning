require("dotenv").config();
const express = require("express");
const cors = require("cors");
const passport = require("passport");
const cookieSession = require("cookie-session");
const passportSetup = require("./passport");
const authRoutes = require("./routes/auth");
const app = express();

app.use(
  cookieSession({
    name: "session",
    keys: ["josh"],
    maxAge: 24 * 60 * 60 * 100,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use("/auth", authRoutes);

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
