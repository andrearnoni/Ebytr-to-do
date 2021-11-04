import React, { createContext, useState } from 'react';

export const Context = createContext();

function Provider({ children }) {
  const [todo, setTodo] = useState('');
  const [status, setStatus] = useState('');
  const [refresh, setRefresh] = useState(false);

  const object = {
    todo,
    setTodo,
    status,
    setStatus,
    refresh,
    setRefresh,
  };

  return (
    <Context.Provider value={ object }>
      {children}
    </Context.Provider>
  );
}

export default Provider;