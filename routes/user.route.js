const express = require("express");
const { createUser, getAllUsers } = require("../controllers/user.controller");
const router = express.Router();

router.route("/").get(getAllUsers).post(createUser);

module.exports = router;
