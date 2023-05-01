import { useState,useEffect } from 'react'
import './App.css'
import Form from './components/form/form';
import TodoList from './components/todo/todoList';

function App() {
  // Initialize the states
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [category, setCategory] = useState("all");
  const [filteredTodos, setFilteredTodo] = useState([]);

  // Filter handler
  const filterHandler = () => {
    switch (category){
      case "complete":
        setFilteredTodo(todos.filter((item) => item.complete == true))
       break;
       
       case "incomplete":
        setFilteredTodo(todos.filter((item) => item.complete == false))
       break; 

       default: 
          setFilteredTodo(todos);
          break;
    }
      
  }

  useEffect(() => {
    filterHandler()
  }, [todos,category])

 
  return (
    <div className='container-wrapper'>
      <h2>MY TODO LIST</h2>
      <Form inputText={inputText} setInputText={setInputText} category={category} setCategory={setCategory} todos={todos} setTodos={setTodos}/>
      <TodoList todos={filteredTodos} setTodos={setTodos} />
    </div>
  )
}

export default App
