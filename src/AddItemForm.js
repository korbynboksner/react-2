import React, { useState } from 'react';

const AddItemForm = ({ addItem }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem({ name, description, price });
    // Reset form fields
    setName('');
    setDescription('');
    setPrice(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
      <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
      <button type="submit">Add Item</button>
    </form>
  );
};

export default AddItemForm;