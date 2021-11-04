import React, { useContext } from 'react';
// import axios from 'axios';
import { Context } from '../context/ContextForm';
import { createTodo } from '../services/api';

function Form() {
  const { todo, setTodo, status, setStatus, refresh, setRefresh } = useContext(Context);

  const handleChange = (e) => {
    if (e.target.name === 'task') {
      setTodo(e.target.value);
    } else if (e.target.name === 'status') {
      setStatus(e.target.value)
    }
  }

  return (
    <div>
      <form>
        <label /> Digite a tarefa a ser adicionada
        <input type="text" autoComplete="off" name="task" onChange={ handleChange } />
        <h3>Selecione o status da tarefa</h3>
        <label />
        <input type="radio" name="status" value="Pendente" onChange={ handleChange } /> Pendente
        <label />
        <input type="radio" name="status" value="Em andamento" onChange={ handleChange } /> Em andamento
        <label />
        <input type="radio" name="status" value="Pronto" onChange={ handleChange } /> Pronto
        <button 
          type="button" 
          onClick={ () => createTodo(setRefresh, refresh, todo, status) }
        >Adicionar tarefa
        </button>
      </form>
    </div>
  )
}

export default Form;
