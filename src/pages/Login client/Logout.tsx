import React from 'react';
import { useAuth } from '../../Services/Authprovider';

const Dashboard: React.FC = () => {
  const { authService } = useAuth();

  const handleLogout = () => {
    authService.logout();
    window.location.reload();
  };

  return (
    <>
      <h1>Dashboard</h1>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
};

export default Dashboard;
