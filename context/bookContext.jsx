import { createContext, useContext, useEffect, useState } from 'react';
import { databases } from '../appwrite/client';
import { Permission, Role, ID, Query } from 'react-native-appwrite';
import { useUser } from '../hooks/useUser';
const DatabaseId = '69677bb8000a49cfdff2';
const CollectionID = 'books';
export const BookContext = createContext();

export const BookContextProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const { user, authChecked } = useUser();

  async function createBook(data) {
    if (!authChecked) {
      console.log('Auth still checking');
      return;
    }
    if (!user) {
      console.log('No user logged in');
      return;
    }
    try {
      await databases.createDocument(
        DatabaseId,
        CollectionID,
        ID.unique(),
        {
          ...data,
          userId: user.$id,
        },
        [
          Permission.read(Role.user(`${user.$id}`)), // allow user to read
          Permission.update(Role.user(`${user.$id}`)), // allow user to update
          Permission.delete(Role.user(`${user.$id}`)),
        ]
      );
    } catch (error) {
      console.log('book context error', error.message);
    }
  }

  async function getBooks() {
    try {
    } catch (error) {
      console.log('book context error', error.message);
    }
  }

  async function getBooks() {
    if (!authChecked) {
      console.log('Auth still checking');
      return;
    }
    if (!user) {
      console.log('No user logged in');
      return;
    }
    try {
      const response = await databases.listDocuments(DatabaseId, CollectionID, [
        Query.equal('userId', user.$id),
      ]);
      setBooks(response.documents);
    } catch (error) {
      console.log('book context error', error.message);
    }
  }

  async function getBookId() {
    try {
    } catch (error) {
      console.log('book context error', error.message);
    }
  }
  async function deleteBook() {
    try {
    } catch (error) {
      console.log('book context error', error.message);
    }
  }

  useEffect(() => {
    if (user) {
      getBooks();
    } else {
      setBooks([]);
    }
  }, [user, books]);

  return (
    <BookContext.Provider
      value={{ books, getBooks, getBookId, createBook, deleteBook }}
    >
      {children}
    </BookContext.Provider>
  );
};
