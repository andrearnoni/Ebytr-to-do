import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../context/ContextForm';
import { getAllTodo } from '../services/api';
import Form from '../components/Form';

function Home() {
  const [tasks, setTasks] = useState([]);
  const { refresh } = useContext(Context);

  useEffect(() => {
    const request = async() => {
      const result = await getAllTodo();
      setTasks(result);
    };
    request();
  }, [refresh]);

  return (
    <div>
      <div>
        <h1>Ebytr - Sistema de registro de tarefas</h1>
        <Form />
      </div>
      <div>
        <ul>
        {tasks.map((task, index) => (
          <div key={index}>
            <ul>
              <li>{task.todo}</li>
              <li>{task.status}</li>
            </ul>
          </div>
         ))}
        </ul>
      </div>
    </div>
  )
}

export default Home;
