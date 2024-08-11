const express = require("express");
const router = express.Router();
const { home, register, login } = require("../controllers/auth-controller.js");
const signupSchema = require("../Validators/auth-validator.js");
const validate = require("../middlewares/validate-middleware.js");
router.route("/").get(home);
router.route("/register").post(validate(signupSchema),register);
router.route("/login").post(validate(signupSchema),login);

module.exports = router;
