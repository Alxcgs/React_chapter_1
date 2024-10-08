import React, { useState } from 'react';
import { Book } from '../models/Book';
import ContactForm from './ContactForm';
import ContactTable from './ContactTable';
import SearchInput from './SearchInput';

const AddressBook = () => {
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const addContact = ({ firstName, lastName, phone }) => {
    const newContact = new Book(Date.now(), firstName, lastName, phone);
    setContacts([...contacts, newContact]);
  };

  const editContact = (id, field, value) => {
    if (field === 'delete') {
      setContacts(contacts.filter(contact => contact.id !== id));
    } else if (value) {
      setContacts(
        contacts.map(contact =>
          contact.id === id ? { ...contact, [field]: value } : contact
        )
      );
    }
  };

  const filteredContacts = contacts.filter(contact =>
    contact.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.phone.includes(searchTerm)
  );

  return (
    <div>
      <h1>Address Book</h1>
      <ContactForm onAdd={addContact} />
      <SearchInput value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} /> {/* Use SearchInput */}
      <ContactTable contacts={filteredContacts} onEdit={editContact} /> {/* Pass filtered contacts */}
    </div>
  );
};

export default AddressBook;