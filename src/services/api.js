import axios from 'axios';

export async function getAllTodo() {
  try {
    const todos = await axios.get('https://ebytr-original.herokuapp.com/todos');
    return todos.data;
  } catch (error) {
    console.log(error);
  }
}

export async function createTodo(setRefresh, refresh, todo, status) {
  try {
    const result = await axios.post('https://ebytr-original.herokuapp.com/todo', { todo, status });
    setRefresh(!refresh);
    return result.data;
  } catch (error) {
    console.log(error);
  }
}

export async function updateTodo(id, todo, status) {
  try {
    const result = await axios.put(`https://ebytr-original.herokuapp.com/todo/${id}`, { todo, status });
    return result.data;
  } catch (error) {
    console.log(error);
  }
}

export async function deleteTodo(setRefresh, refresh, id) {
  try {
    const result = await axios.delete(`https://ebytr-original.herokuapp.com/todo/${id}`);
    setRefresh(!refresh);
    return result.data;
  } catch (error) {
    console.log(error);
  }
}
