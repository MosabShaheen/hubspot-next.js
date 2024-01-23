"use client"
import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    number: '',
  });

  const handleChange = (e:any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    await fetch("/api/form-submit", {
        method: "POST",
        body: JSON.stringify(formData)
    })
   
  };

  return (
    <form className='flex flex-col max-w-[600px] mx-auto' onSubmit={handleSubmit}>
      <label>
        First Name:
        <input className='text-black' type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
      </label>
      <br />
      <label>
        Last Name:
        <input className='text-black' type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
      </label>
      <br />
      <label>
        Email:
        <input className='text-black' type="email" name="email" value={formData.email} onChange={handleChange} />
      </label>
      <br />
      <label>
        Number:
        <input className='text-black' type="tel" name="number" value={formData.number} onChange={handleChange} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
