import axios from 'axios';

export async function getAllTodo() {
  try {
    const todos = await axios.get('https://ebytr-original.herokuapp.com/todos');
    return todos.data;
  } catch (error) {
    console.log(error);
  }
}