const express = require("express");

const { validation, ctrlWrapper } = require("../../middlewares");
const { users: ctrl } = require("../../controllers");

const router = express.Router();

router.post("/sighup", ctrlWrapper(ctrl.signup));

module.exports = router;
