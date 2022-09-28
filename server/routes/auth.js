const router = require("express").Router();
const passport = require("passport");

router.get("/login/success", (req, res) => {
  if (req.user) {
    res.status(200).json({
      error: false,
      message: "succesfully logged in",
      user: req.user,
    });
  } else {
    res.status(403).json({
      error: true,
      message: "Not Authorized",
    });
  }
});
router.get("/login/failed", (req, res) => {
  res.status(401).json({
    error: true,
    message: "Log in failure",
  });
});

router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: "http://localhost:3000",
    failureRedirect: "/login/failed",
  })
);

router.get("/google", passport.authenticate("google", ["profile", "email"]));

router.get("/logout", (req, res) => {
  req.logOut();
  req.redirect("http://localhost:3000");
});

module.exports = router;
