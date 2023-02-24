import React from 'react';
import { useAuth } from '../../Services/Authprovider';

const Logout: React.FC = () => {
  const { authService, isAuthenticated } = useAuth();

  const handleLogout = () => {
    authService.logout();
    window.location.reload();
  };

  return (
    <>
      {isAuthenticated ? (
        <><p>You are logged in.</p><button onClick={handleLogout}>Logout</button></>
      ) : (
        <p>Please log in.</p>
      )}
    </>
  );
};

// const MyComponent: React.FC = () => {
//     const { authService, isAuthenticated } = useAuth();

//     const handleLogout = () => {
//       authService.logout();
//     };

//     return (
//       <>

//       </>
//     );


export default Logout;
