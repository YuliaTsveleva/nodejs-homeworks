const { NotFound } = require("http-errors");
const { Contact } = require("../../models/contact");
// const contactsOperations = require("../../models/contacts");

const getContactById = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findById(contactId);
  // const result = await contactsOperations.getContactById(contactId);
  if (!result) {
    throw new NotFound(`Contact witn id ${contactId} not found`);
  }
  res.json({
    status: "success",
    code: 200,
    data: {
      result,
    },
  });
};

module.exports = getContactById;
