import React, { createContext, useState } from 'react';

export const Context = createContext();

function Provider({ children }) {
  const [todo, setTodo] = useState('');
  const [tasks, setTasks] = useState([]);
  const [status, setStatus] = useState('');
  const [refresh, setRefresh] = useState(false);

  const object = {
    todo,
    setTodo,
    tasks,
    setTasks,
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