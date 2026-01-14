import { useContext } from 'react';
import { BookContext } from '../context/bookContext';

export const useBook = () => {
  const context = useContext(BookContext);

  if (!context) {
    throw new Error('context is not found ');
  }
  return context;
};
