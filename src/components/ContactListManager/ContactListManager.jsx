import React, { useState } from "react";
import './ContactListManager.css'

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
  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  // Validate phone number format (allowing spaces, dashes, parentheses)
  function isValidPhone(phone) {
    return /^[0-9\-\(\)\s]+$/.test(phone) && phone.replace(/\D/g, '').length >= 10;
  }

  // Add a new contact to the list
  function addContact() {
    if (name.trim() !== "" && isValidEmail(email) && isValidPhone(phone)) {
      setContacts((c) => [...c, { id: Date.now(), name, email, phone }]);
      setName("");
      setEmail("");
      setPhone("");
    } else {
      alert("Please enter valid name, email, and phone number.");
    }
  }


  // Delete a contact from the list
  function deleteContact(index) {
    const updatedContacts = contacts.filter((_, i) => i !== index);
    setContacts(updatedContacts);
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
          <li key={contact.id}>
            {contact.name} - {contact.email} - {contact.phone}
            <button onClick={() => deleteContact(index)}>Delete</button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default ContactListManager;
