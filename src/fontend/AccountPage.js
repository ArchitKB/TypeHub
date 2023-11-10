// AccountPage.js
import React from 'react';

const AccountPage = () => {
  // Fetch user profile data or use your authentication state to get user information
  const userProfile = {
    username: 'JohnDoe',
    email: 'john.doe@example.com',
    // Add more user profile details as needed
  };

  return (
    <div>
      <h2>Account Page</h2>
      <div>
        <strong>Username:</strong> {userProfile.username}
      </div>
      <div>
        <strong>Email:</strong> {userProfile.email}
      </div>
      {/* Add more user profile details here */}
    </div>
  );
};

export default AccountPage;
