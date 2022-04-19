const { Contact } = require("../../models/contact");

// const contactsOperations = require("../../models/contacts");

const listContacts = async (req, res) => {
  const result = await Contact.find({});
  // const contacts = await contactsOperations.listContacts();
  res.json({
    status: "success",
    code: 200,
    data: {
      result,
    },
  });
};
module.exports = listContacts;
