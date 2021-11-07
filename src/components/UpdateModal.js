import React, { useState, useContext } from 'react';
import { Context } from '../context/ContextForm';
import { Modal, Button } from 'react-bootstrap';
import { updateTodo } from '../services/api';
import '../styles/UpdateModal.css';

function UpdateModal({task}) {
  const [show, setShow] = useState(false);
  const { todo, setTodo, status, setStatus, refresh, setRefresh } = useContext(Context);


  const handleClose = () => {
    setShow(false);
    setTimeout(() => {
      setRefresh(!refresh);
    }, 350);
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
       <Button variant="primary" className="modal-primary__button" onClick={handleShow}>
        Editar Tarefa
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar tarefa</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form>
          <input type="text" autoComplete="off" name="task" className="modal-input" onChange={ handleChange } />
          <h5 className="modal-radio__title">Selecione o status da tarefa</h5>
          <div className="modal-radio__inputs">
            <label>
              <input type="radio" name="status" value="Pendente" onChange={ handleChange } /> Pendente
            </label>
            <label>
              <input type="radio" name="status" value="Em andamento" onChange={ handleChange } /> Em andamento
            </label>
            <label>
              <input type="radio" name="status" value="Pronto" onChange={ handleChange } /> Pronto
            </label>
          </div>
         </form> 
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
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
