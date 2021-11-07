import React, { useContext, useEffect } from 'react';
import { Context } from '../context/ContextForm';
import { getAllTodo, deleteTodo } from '../services/api';
import { Button } from 'react-bootstrap';
import UpdateModal from '../components/UpdateModal';
import '../styles/Tasks.css';

function Tasks() {
  const { tasks, setTasks, refresh, setRefresh } = useContext(Context);

  useEffect(() => {
    const request = async() => {
      const result = await getAllTodo();
      setTasks(result);
    };
    request();
  }, [refresh, setTasks]);

  return (
    <div className="tasks__container">
      <ul>
        {!tasks ? <h4 className="tasks-empty">Não há tarefas adicionadas!</h4> : tasks.map((task, index) => (
          <div key={index} className="tasks-main">
            <div>
              <p><strong>Tarefa: </strong>{task.todo}</p>
              <p><strong>Inserido em: </strong>{task.createdAt}</p>
              <p><strong>Status: </strong>{task.status}</p>
            </div>
            <div>
              <UpdateModal task={task} />
              <Button
                variant="danger"
                className="tasks-button" 
                onClick={() => deleteTodo(setRefresh, refresh, task._id)}
              >Excluir Tarefa
              </Button>
            </div>
          </div>
         ))}
        </ul>
    </div>
  )
}

export default Tasks;