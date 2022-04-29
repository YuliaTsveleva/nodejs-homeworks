const express = require("express");

const { auth, upload, validation, ctrlWrapper } = require("../../middlewares");
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

router.patch(
  "/avatars",
  auth,
  upload.single("avatar"),
  ctrlWrapper(ctrl.updateAvatar)
);

router.get("/logout", auth, ctrlWrapper(ctrl.logout));

router.patch(
  "/:userId/subscription",
  validation(subscriptionJoiSchema),
  ctrlWrapper(ctrl.updateSubscription)
);

router.get("/verify/:verificationToken", auth, ctrlWrapper(ctrl.verifyEmail));

module.exports = router;
