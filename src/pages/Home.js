import React, { useContext, useEffect } from 'react';
import { Context } from '../context/ContextForm';
import { getAllTodo, deleteTodo } from '../services/api';
import { Button } from 'react-bootstrap';
import Form from '../components/Form';
import DropDown from '../components/DropDown';
import UpdateModal from '../components/UpdateModal';

function Home() {
  const { tasks, setTasks, refresh, setRefresh } = useContext(Context);

  useEffect(() => {
    const request = async() => {
      const result = await getAllTodo();
      setTasks(result);
    };
    request();
  }, [refresh, setTasks]);

  return (
    <div>
      <div>
        <h1>Ebytr - Sistema de registro de tarefas</h1>
        <Form />
        <DropDown />
      </div>
      <div>
        <ul>
        {tasks && tasks.map((task, index) => (
          <div key={index}>
            <p>TAREFA: {task.todo}</p>
            <p>INSERIDO EM: {task.createdAt}</p>
            <div>
              <p>STATUS: {task.status}</p>
              <UpdateModal task={task}/>
              <Button
                variant="danger" 
                onClick={() => deleteTodo(setRefresh, refresh, task._id)}
              >Excluir Tarefa
              </Button>
            </div>
          </div>
         ))}
        </ul>
      </div>
    </div>
  )
}

export default Home;
