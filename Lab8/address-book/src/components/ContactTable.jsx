import React from 'react';
import '../App.css';

const ContactTable = ({ contacts, onEdit }) => {
  if (contacts.length === 0) {
    return <p>No data to display</p>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Phone</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((contact) => (
          <tr key={contact.id}>
            <td>{contact.id}</td>
            <td>
              <input
                type="text"
                value={contact.firstName}
                onChange={(e) => onEdit(contact.id, 'firstName', e.target.value)}
              />
            </td>
            <td>
              <input
                type="text"
                value={contact.lastName}
                onChange={(e) => onEdit(contact.id, 'lastName', e.target.value)}
              />
            </td>
            <td>
              <input
                type="text"
                value={contact.phone}
                onChange={(e) => onEdit(contact.id, 'phone', e.target.value)}
              />
            </td>
            <td>
              <button onClick={() => onEdit(contact.id, 'delete')}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ContactTable;