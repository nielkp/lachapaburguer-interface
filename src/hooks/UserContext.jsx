import { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({});

  const putUserData = (userInfo) => {
    setUserInfo(userInfo);

    localStorage.setItem('lachapaburger:userData', JSON.stringify(userInfo));
  };

  const logout = () => {
    setUserInfo({});
    localStorage.removeItem('lachapaburger:userData');
  };

  useEffect(() => {
    const userInfoLocalStorage = localStorage.getItem('lachapaburger:userData');

    if (userInfoLocalStorage) {
      setUserInfo(JSON.parse(userInfoLocalStorage));
    }
  }, []);

  return (
    <UserContext.Provider value={{ userInfo, putUserData, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('useUser must be a valid content');
  }

  return context;
};
