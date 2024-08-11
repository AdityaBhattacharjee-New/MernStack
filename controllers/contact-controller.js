const Contact = require("../MODELS/contact-models.js");

const contactForm = async (req, res) => {
  try {
    const response = req.body;
    await Contact.create(response);
    return res.status(200).json({ message: "message send successfuly" });
  } catch (error) {
    return res.status(500).json({ message: "message not delivered" });
  }
};

module.exports = contactForm;
