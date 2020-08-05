import React, { useReducer } from 'react';
import reducer, { initialState } from '../reducers/appReducer';
import { AppContext } from '../hooks/appContext';

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
