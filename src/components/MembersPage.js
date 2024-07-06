import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './MembersPage.css';

function MembersPage() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const fetchMembers = async () => {
      const res = await axios.get('http://localhost:5000/api/members');
      setMembers(res.data);
    };
    fetchMembers();
  }, []);

  return (
    <div className="members-container">
      <h1>All Members</h1>
      <div className="members">
        {members.map((member) => (
          <div key={member._id} className="member">
            <h2>{member.email}</h2>
            <p>{member.city}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MembersPage;
