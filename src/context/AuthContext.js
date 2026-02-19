import React, { createContext, useContext, useState, useEffect } from 'react';

// Create Auth Context
const AuthContext = createContext();

// Auth Provider Component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for stored user in localStorage (simulating persistence)
    const storedUser = localStorage.getItem('calendly_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  // Signup function
  const signup = (email, password, name) => {
    const newUser = {
      id: Date.now().toString(),
      email,
      name,
      createdAt: new Date().toISOString(),
    };
    // Store user in localStorage (in real app, this would be backend)
    localStorage.setItem('calendly_user', JSON.stringify(newUser));
    setUser(newUser);
    return newUser;
  };

  // Login function
  const login = (email, password) => {
    // Simulate authentication (in real app, this would be backend verification)
    const storedUser = localStorage.getItem('calendly_user');
    if (storedUser) {
      const userData = JSON.parse(storedUser);
      if (userData.email === email) {
        setUser(userData);
        return { success: true, user: userData };
      }
    }
    // For demo, allow any login and create a user
    const demoUser = {
      id: Date.now().toString(),
      email,
      name: email.split('@')[0],
      createdAt: new Date().toISOString(),
    };
    localStorage.setItem('calendly_user', JSON.stringify(demoUser));
    setUser(demoUser);
    return { success: true, user: demoUser };
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem('calendly_user');
    setUser(null);
  };

  // Update user profile
  const updateProfile = (updates) => {
    const updatedUser = { ...user, ...updates };
    localStorage.setItem('calendly_user', JSON.stringify(updatedUser));
    setUser(updatedUser);
  };

  const value = {
    user,
    loading,
    signup,
    login,
    logout,
    updateProfile,
    isAuthenticated: !!user,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export default AuthContext;
