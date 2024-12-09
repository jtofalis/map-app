import { createContext, useContext } from 'react';

export const AppContext = createContext(undefined);

export function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext should be used inside a AppContextProvider');
  }
  return context;
}
