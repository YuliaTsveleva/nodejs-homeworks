const { NotFound } = require("http-errors");

const { Contact } = require("../../models/contact");

// const contactsOperations = require("../../models/contacts");
// const contactSchema = require("../../schemas/contact");

const updateContactById = async (req, res) => {
  // const { error } = contactSchema.validate(req.body);
  // if (error) {
  //   error.status = 400;
  //   throw error;
  // }
  const { contactId } = req.params;
  const result = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });
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

module.exports = updateContactById;
