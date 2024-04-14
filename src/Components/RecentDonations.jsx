import React from 'react';

function RecentDonations({ donations }) {
  return (
    <section className="sidebar">
      <h2>Recent Donations</h2>
      <ul>
        {donations.map((donation, index) => (
          <li key={index}><span>{donation.name} donated ${donation.amount}</span> {donation.caption}</li>
        ))}
      </ul>
    </section>
  );
}

export default RecentDonations;
