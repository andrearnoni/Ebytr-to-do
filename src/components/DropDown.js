import { useContext } from 'react';
import { Dropdown } from 'react-bootstrap';
import { Context } from '../context/ContextForm';
import axios from 'axios';

function DropDown() {
  const { setTasks } = useContext(Context);

  async function orderAll() {
    try {
      const todos = await axios.get('https://ebytr-original.herokuapp.com/todos');
      const response = todos.data;
      const getOrder = response.sort((a, b) => {
        if (a.todo < b.todo) {
          return -1;
        }
        if (a.todo > b.todo) {
          return 1;
        }
        return 0;
      });
      return setTasks(getOrder);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Ordenar por
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={ () => orderAll() }>Ordem Alfabética</Dropdown.Item>
            <Dropdown.Item >Data de inserção</Dropdown.Item>
            <Dropdown.Item onClick={ () => orderAll() }>Status</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
    </div>
  )
}

export default DropDown
