import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import ContactList from './components/ContactList';
import Header from './components/Header';
import './App.css';
const App = () => {
  const [contact,addContact] = useState([]);

  const addContactHandler = (newContact) =>{
    addContact([...contact,{id : uuidv4(),...newContact}]);
  }
  const removeContactHandler = (id) =>{
    const newContact = contact.filter(contact => contact.id!== id);
    addContact(newContact)
  }
  return (
    <div className="container">
      <h3>Contacts List</h3>
      <Header addContactHandler = {addContactHandler}/>
      <ContactList contact = {contact} removeContactHandler = {removeContactHandler}/>
    </div>
  );
}

export default App;
