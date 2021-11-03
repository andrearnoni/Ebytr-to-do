import axios from "./axiosApi";

const data = {     // O task e o stat são as as propriedades que virão do context API
  todo: task,      // Ex: const { task, setTask, stat, setStat } = useContext(Context);
  status: stat,
};

export async function createTodo() {
  try {
    const result = await axios.post(`https://ebytr-original.herokuapp.com/todo`, { data });
    return result.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getAllTodo() {
  try {
    const todos = await axios.get('https://ebytr-original.herokuapp.com/todos');
    return todos.data;
  } catch (error) {
    console.log(error);
  }
}