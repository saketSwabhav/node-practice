import contact_details from "../../../view/contact_details.js";

export const addDetails = async (req, res, next) => {
  try {

    if (!Object.keys(req.body).length) {
      res.status(400).send("body cannot be empty");
    }

    let { type,number } = req.body;
    new contact_details.ContactDetails(type,number).insert();
    console.log(contact_details.details);
    
    res.status(200).send(contact_details.details);
 
} catch (e) {
    console.error(e);
  }
};
