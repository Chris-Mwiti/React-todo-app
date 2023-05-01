import { faCheckSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './todo.css'
import { faCheck } from "@fortawesome/free-solid-svg-icons";
const Todo = ({todo,todos,setTodos}) => {
    // Event handlers

    const deleteHandler = () => {
        setTodos(todos.filter( (el) => el.id !== todo.id))
    }

    const completeHandler = () => {
        setTodos(todos.map((item) => {
            if(item.id === todo.id){
                return {
                    ...todo, complete: !todo.complete
                }
            }

            return item;
        }))
    }

    return ( 
        <>
        <li className={`todo-item ${todo.complete ? "completed": ""}`}>
            <p>{todo.title}</p>
            <div className="btn-action">
                <button className="btn-complete" onClick={completeHandler}>
                    <FontAwesomeIcon icon={faCheck} className="icon"></FontAwesomeIcon>
                </button>
                <button className="btn-trash" onClick={deleteHandler}>
                    <FontAwesomeIcon icon={faTrashCan} className="icon"></FontAwesomeIcon>
                </button>
            </div>
        </li>
        <br></br>
        </>
     );
}
 
export default Todo;