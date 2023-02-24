import React, { createContext, useContext } from 'react';
import { AuthService } from './authServices';

interface AuthContextProps {
  authService: AuthService;
  isAuthenticated: boolean;
}


export const AuthContext = createContext<AuthContextProps>({
  authService: new AuthService(),
  isAuthenticated: false,
});
type AuthProviderProps = {
  children: React.ReactNode;
};


export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const authService = new AuthService();
  const isAuthenticated = authService.isAuthenticated();

  return (
    <AuthContext.Provider value={{ authService, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextProps => useContext(AuthContext);
