import { createContext, useState, useContext} from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);


  const [regStep, setRegStep] = useState(1);

  const login = (token) => {

    localStorage.setItem('token', token); 
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('regStep'); 
    setIsAuthenticated(false);
    setRegStep(1);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, regStep, setRegStep }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
