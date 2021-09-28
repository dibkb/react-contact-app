import React from "react";
import "./ContactItem.css";
const ContactItem = ({ id,name, email,clickHandler }) => {
  return (
    <main className = 'contact-item-container'>
      <div className="contact-item">
        <span className="contact-item-name">{name}</span>
        <span className="contact-item-email">{email}</span>
      </div>
      <button className = 'delete-btn' onClick = {() => clickHandler(id)}>Delete</button>
    </main>
  );
};

export default ContactItem;
