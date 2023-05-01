import Todo from "./todo";
import './todo.css'

const TodoList = ({todos,setTodos}) => {
    return ( 
        <div className="todo-container">
            <ul className="todo-list">
                {todos.map((todo) => (
                    <Todo key={todo.id} todo={todo} todos={todos} setTodos={setTodos} />
                ))}
            </ul>
        </div>
     );
}
 
export default TodoList;