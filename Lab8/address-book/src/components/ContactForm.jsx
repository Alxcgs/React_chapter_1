import React, { useState } from 'react';
import '../App.css';

const ContactForm = ({ onAdd }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!firstName) newErrors.firstName = 'The first name is required';
    if (!lastName) newErrors.lastName = 'The last name is required';
    if (!phone) newErrors.phone = 'The phone is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onAdd({ firstName, lastName, phone });
      setFirstName('');
      setLastName('');
      setPhone('');
      setErrors({});
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name:</label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        {errors.firstName && <span className="error">{errors.firstName}</span>}
      </div>
      <div>
        <label>Last Name:</label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        {errors.lastName && <span className="error">{errors.lastName}</span>}
      </div>
      <div>
        <label>Phone:</label>
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        {errors.phone && <span className="error">{errors.phone}</span>}
      </div>
      <button type="submit">Add Contact</button>
    </form>
  );
};

export default ContactForm;