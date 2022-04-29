const { Conflict } = require("http-errors");
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const { nanoid } = require("nanoid");

const { sendEmail } = require("../../helpers");
const { User } = require("../../models");

const signup = async (req, res) => {
  const { email, password, subscription } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw new Conflict(`Email ${email} in use`);
  }
  const verificationToken = nanoid();
  const avatarURL = gravatar.url(email);
  const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));

  const result = await User.create({
    email,
    password: hashPassword,
    subscription,
    avatarURL,
  });

  const mail = {
    to: email,
    subject: "Confirm email",
    html: `<a target="_blank" href="http://localhost:3000/api/users/verify/${verificationToken}">Confirm your email</a>`,
  };

  await sendEmail(mail);

  res.status(201).json({
    status: "success",
    code: 201,
    data: {
      user: {
        email,
        subscription,
        avatarURL,
        verificationToken,
      },
    },
  });
};

module.exports = signup;
