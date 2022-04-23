const { NotFound } = require("http-errors");

const { User } = require("../../models");

const updateSubscription = async (req, res) => {
  console.log("params", req.params);
  const { userId } = req.params;
  const result = await User.findByIdAndUpdate(userId, req.body, { new: true });
  if (!result) {
    throw new NotFound(`User not found`);
  }

  res.json({
    status: "success",
    code: 200,
    data: {
      result,
    },
  });
};

module.exports = updateSubscription;
