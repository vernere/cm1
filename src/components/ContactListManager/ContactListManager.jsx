import React, { useState } from "react";
import './ContactListManager.css';

function ContactListManager() {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  // Handle input change for name
  function handleNameChange(event) {
    setName(event.target.value);
  }

  // Handle input change for email
  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  // Handle input change for phone
  function handlePhoneChange(event) {
    setPhone(event.target.value);
  }

  // Add a new contact to the list
  function addContact() {
    const phoneRegex = /^[0-9]{10}$/;
    if (name.trim() !== "" && email.trim() !== "" && phoneRegex.test(phone)) {
      setContacts((c) => [...c, { name, email, phone }]);
      setName("");
      setEmail("");
      setPhone("");
    }
  }

  function deleteContact(index) {
    if (index >= 0 && index < contacts.length) {
      const updatedContacts = contacts.filter((_, i) => i !== index);
      setContacts(updatedContacts);
    }
  }
  
  return (
    <div className='contact-list'>
      <h1>Contact List Manager</h1>
      <div>
        <input
          type='text'
          placeholder='Enter Name...'
          value={name}
          onChange={handleNameChange}
        />
        <input
          type='text'
          placeholder='Enter email...'
          value={email}
          onChange={handleEmailChange}
        />
        <input
          type='text'
          placeholder='Enter Phone Number...'
          value={phone}
          onChange={handlePhoneChange}
        />
        <button onClick={addContact}>Add Contact</button>
      </div>
      <ol>
        {contacts.map((contact, index) => (
          <li key={index}>
            {contact.name} - {contact.email} - {contact.phone}
            <button onClick={() => deleteContact(index)}>Delete</button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default ContactListManager;
