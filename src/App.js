import Title from "./components/Title";
import AddTodos from "./components/AddTodos";
import Todos from "./components/Todos";
import {useState} from 'react';

function App() {
  const [todos,setTodos] = useState([
    {
      id:1,
      task: 'Cook'
    },
    {
      id:2,
      task: 'Workout'
    },
    {
      id:3,
      task: 'Online Games'
    }
  ]);
  const onAdd = (task) => {
    const newTask = {id:todos.length + 1, task:task};
    setTodos([...todos, newTask]);
  }
  const deleteTask = (id) => {
    if(window.confirm('Are you sure?')){
    setTodos(todos.filter(todo => todo.id !== id))
    }
  }
  
  return (
    <div className="wrapper">
      <Title />
      <div className="container">
        <AddTodos onAdd={onAdd} />  
        {todos.length > 0 ?<Todos todos={todos} onDelete={deleteTask} /> : 
        <div style={{textAlign: 'center', color: 'white'}}>No Todos</div>}
      </div>
    </div>
  );
}

export default App;
