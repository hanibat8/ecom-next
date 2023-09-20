import React, { createContext, useState, useContext } from 'react';
import { useRouter } from 'next/navigation';

const AuthContext = createContext({
    isAuthenticated: false,
    login: () => {},
    logout: () => {}, });

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const router=useRouter();
  
    const login = () => {
      setIsAuthenticated(true);
      router.push('/products')
    };
  
    const logout = () => {
      setIsAuthenticated(false);
      router.push('/')
    };
  
    return (
      <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
        {children}
      </AuthContext.Provider>
    );
  }