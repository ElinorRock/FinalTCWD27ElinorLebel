import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './SubscriptionsPage.css';

function SubscriptionsPage() {
  return (
    <div className="subscriptions-page">
      <h2>Subscriptions</h2>
      <nav>
        <Link to="members">All Members</Link>
        <Link to="add">Add Member</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default SubscriptionsPage;
