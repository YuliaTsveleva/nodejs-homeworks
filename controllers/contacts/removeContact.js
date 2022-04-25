const { NotFound } = require("http-errors");

const { Contact } = require("../../models");

const removeContact = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndRemove(contactId);
  if (!result) {
    throw new NotFound(`Contact witn id ${contactId} not found`);
  }
  res.json({
    status: "success",
    code: 200,
    message: `Contacts with id ${contactId} deleted`,
    data: {
      result,
    },
  });
};

module.exports = removeContact;
