import React, { useState, useContext } from 'react';
import { Context } from '../context/ContextForm';
import { Modal, Button } from 'react-bootstrap';
import { updateTodo } from '../services/api';

function UpdateModal({task}) {
  const [show, setShow] = useState(false);
  const { todo, setTodo, status, setStatus } = useContext(Context);


  const handleClose = () => {
    setShow(false);
    setTimeout(() => {
      window.location.reload();
    }, 50);
  }

  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    if (e.target.name === 'task') {
      setTodo((e.target.value).toUpperCase());
    } else if (e.target.name === 'status') {
      setStatus(e.target.value)
    }
  }

  return (
    <div>
       <Button variant="primary" onClick={handleShow}>
        Editar Tarefa
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar tarefa</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form>
          <label />
          <input type="text" autoComplete="off" name="task" onChange={ handleChange } />
          <h3>Selecione o status da tarefa</h3>
          <label />
          <input type="radio" name="status" value="Pendente" onChange={ handleChange } /> Pendente
          <label />
          <input type="radio" name="status" value="Em andamento" onChange={ handleChange } /> Em andamento
          <label />
          <input type="radio" name="status" value="Pronto" onChange={ handleChange } /> Pronto
         </form> 
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
          <Button variant="primary" onClick={ () => { updateTodo(task._id, todo, status); handleClose() } }>
            Salvar Alterações
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default UpdateModal;
