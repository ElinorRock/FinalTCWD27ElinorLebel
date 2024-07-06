import React, { useState } from 'react';
import './AddMemberPage.css';

function AddMemberPage() {
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');

  const handleAddMember = () => {
    // Logic for adding a new member
  };

  return (
    <div className="add-member-page">
      <h2>Add Member</h2>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={handleAddMember}>Add Member</button>
    </div>
  );
}

export default AddMemberPage;
