const express = require("express");

const { auth, validation, ctrlWrapper } = require("../../middlewares");
const { users: ctrl } = require("../../controllers");
const {
  joiSignupSchema,
  joiLoginSchema,
  subscriptionJoiSchema,
} = require("../../models");

const router = express.Router();

router.post("/signup", validation(joiSignupSchema), ctrlWrapper(ctrl.signup));

router.post("/login", validation(joiLoginSchema), ctrlWrapper(ctrl.login));

router.get("/current", auth, ctrlWrapper(ctrl.getCurrent));

router.get("/logout", auth, ctrlWrapper(ctrl.logout));

router.patch(
  "/:userId/subscription",
  validation(subscriptionJoiSchema),
  ctrlWrapper(ctrl.updateSubscription)
);

module.exports = router;
