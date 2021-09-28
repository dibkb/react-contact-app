import React from "react";
import ContactItem from "./ContactItem";
const ContactList = ({ contact,removeContactHandler }) => {
   const deleteContactHandler = (id) =>{
      removeContactHandler(id)
   }
  return (
    <div>
      {contact.map((item) => {
        return <ContactItem key ={item.id} id = {item.id} name={item.name} email={item.email} clickHandler = {deleteContactHandler}/>;
      })}
    </div>
  );
};

export default ContactList;
