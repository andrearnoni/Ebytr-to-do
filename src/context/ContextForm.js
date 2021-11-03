import React, { createContext, useState } from 'react';

export const Context = createContext();

function Provider({ children }) {
  const [task, setTask] = useState([]);

  const object = {
    task,
    setTask,
  };

  return (
    <Context.Provider value={ object }>
      {children}
    </Context.Provider>
  );
}

export default Provider;