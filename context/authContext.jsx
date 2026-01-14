import { createContext, useEffect, useState } from 'react';
import { account } from '../appwrite/client';
import { ID } from 'react-native-appwrite';
export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [authChecked, setAuthChecked] = useState(false);

  async function login(email, password) {
    try {
      try {
        await account.deleteSession('current');
      } catch (_) {
        // ignore if no session
      }
      await account.createEmailPasswordSession(email, password);
      const response = await account.get();
      setUser(response);
      console.log('Account : ', response);
    } catch (error) {
      console.log('auth Context error :', error.message);
      throw error;
    }
  }
  async function register(email, password) {
    try {
      await account.create(ID.unique(), email, password);
      await login(email, password);
    } catch (error) {
      console.log('auth Context error :', error.message);
      throw error;
    }
  }
  async function logout() {
    if (!user) return;
    try {
      await account.deleteSession('current');
      setUser(null);
    } catch (error) {
      console.log('auth Context error :', error.message);
      throw error;
    }
  }
  async function getInitialValue() {
    try {
      const response = await account.get();
      setUser(response);
    } catch (error) {
      setUser(null);
      console.log(error.message);
    } finally {
      setAuthChecked(true);
    }
  }

  useEffect(() => {
    getInitialValue();
  }, []);

  return (
    <UserContext.Provider
      value={{ user, login, register, logout, authChecked }}
    >
      {children}
    </UserContext.Provider>
  );
};
