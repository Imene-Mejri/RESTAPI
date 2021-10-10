const express= require('express')
const router =express.Router()
let Contact=require('../Model/contactmodel')
//@role:test
//@url:http://localhost:5000/api/contacts/test
//private/public


router.get("/test", (req, res) => {
    res.json("it is working ");
  });
  



//@role:create a new contact
//@url:http://localhost:4000/api/contacts/add
//private/public
router.post("/add", async (req, res) => {
    const { name, email } = req.body; 
    try {
      const newContact = new Contact({ name, email }); 
      const contact = await newContact.save(); 
      res.status(201).json(contact); 
    } catch (error) {
      res.status(404).json({ msg: 'there is an error' });
    }
  });
//read all user
//@role:read all contact
//@url:http://localhost:5000/api/contacts/all
//private/public
router.get("/all", async (req, res) => {
    try {
      const contacts = await Contact.find();
      res.status(201).json({ msg: " all the contacts", contacts });
    } catch (error) {
      res.status(404).json({ msg: error.message });
    }
  });
  //edit contact
  //@role:edit contact
  //@url: http://localhost:4000/api/contacts/edit/:id
  //private/public
router.put("/edit/:name", async(req, res) => {
    const Name = req.params.name;
  
    try {
      const contact = await Contact.findByIdAndUpdate(Name, { $set: req.body })
      res.status(200).json(contact)
    } catch (error) {
      res.status(404).json({ msg: 'the user has not been updated ',contact });
    }
  });

  //@url: http://localhost:4000/api/contacts/delete/:id
//@role:delete contact
//private/public
router.delete("/delete/:id", async (req, res) => {
    const id= req.params.id;  
    try {
      const contacts = await Contact.findByIdAndRemove(id);
      res.status(200).json(contacts);
    } catch (error) {
      res.status(404).json({ msg: 'the contact has bee deleted',contact    });
    }
  });
  
  module.exports = router;

