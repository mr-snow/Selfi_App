import { createContext, useState } from 'react';
import { account } from '../appwrite/client';
import { ID } from 'react-native-appwrite';

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

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

  return (
    <UserContext.Provider value={{ user, login, register, logout }}>
      {children}
    </UserContext.Provider>
  );
};
