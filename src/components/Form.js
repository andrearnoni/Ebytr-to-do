import React, { useContext } from 'react';
import { Context } from '../context/ContextForm';
import { createTodo } from '../services/api';
import '../styles/Form.css';

function Form() {
  const { todo, setTodo, status, setStatus, refresh, setRefresh } = useContext(Context);

  const handleChange = (e) => {
    if (e.target.name === 'task') {
      setTodo((e.target.value).charAt(0).toUpperCase() + (e.target.value).slice(1));
    } else if (e.target.name === 'status') {
      setStatus(e.target.value)
    }
  }

  return (
    <div className="form__container">
      <form>
        <h3>Digite a tarefa a ser adicionada</h3>
        <input type="text" autoComplete="off" className="form-input" name="task" onChange={ handleChange } />
        <h3 className="form-status__title">Selecione o status da tarefa</h3>
        <div className="form-radios">
          <label>
            <input 
              type="radio" 
              name="status" 
              className="form-status" 
              value="Pendente" 
              onChange={ handleChange } /> Pendente
          </label>
          <label>
            <input 
              type="radio" 
              name="status" 
              className="form-status" 
              value="Em andamento" 
              onChange={ handleChange } /> Em andamento
          </label> 
          <label> 
            <input 
              type="radio" 
              name="status" 
              className="form-status" 
              value="Pronto" 
              onChange={ handleChange } /> Pronto
          </label>
          </div>
        <button 
          type="button"
          className="form-button" 
          onClick={ () => createTodo(setRefresh, refresh, todo, status) }
        > Adicionar
        </button>
      </form>
    </div>
  )
}

export default Form;
