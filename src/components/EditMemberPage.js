import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './EditMemberPage.css';

function EditMemberPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [member, setMember] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMemberData = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/members/${id}`);
        setMember(res.data);
      } catch (err) {
        setError('Error fetching member data');
      } finally {
        setLoading(false);
      }
    };
    
    fetchMemberData();
  }, [id]);

  const handleUpdateMember = async () => {
    try {
      const res = await axios.put(`http://localhost:5000/api/members/${id}`, member);
      if (res.data.success) {
        navigate('/subscriptions/members');
      } else {
        setError('Error updating member data');
      }
    } catch (err) {
      setError('Error updating member data');
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="edit-member-page">
      {member && (
        <>
          <h2>Edit Member</h2>
          <label>
            Email:
            <input
              type="email"
              placeholder="Email"
              value={member.email}
              onChange={(e) => setMember({ ...member, email: e.target.value })}
            />
          </label>
          <label>
            City:
            <input
              type="text"
              placeholder="City"
              value={member.city}
              onChange={(e) => setMember({ ...member, city: e.target.value })}
            />
          </label>
          <button onClick={handleUpdateMember}>Update Member</button>
        </>
      )}
    </div>
  );
}

export default EditMemberPage;
