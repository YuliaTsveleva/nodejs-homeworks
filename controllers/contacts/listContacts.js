const { Contact } = require("../../models");

const listContacts = async (req, res) => {
  const { _id } = req.user;
  const { page = 1, limit = 20 } = req.query;
  const skip = (page - 1) * limit;

  const filterFavorite = req.query.favorite;

  let target;
  if (filterFavorite) {
    target = { owner: _id, favorite: filterFavorite };
  } else {
    target = { owner: _id };
  }

  const result = await Contact.find(target, "", {
    skip,
    limit: Number(limit),
  }).populate("owner", "_id email subscription");

  res.json({
    status: "success",
    code: 200,
    data: {
      result,
    },
  });
};
module.exports = listContacts;
