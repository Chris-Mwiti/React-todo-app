import { faPlusSquare } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './form.css';
import { faPlus } from "@fortawesome/free-solid-svg-icons";


const Form = ({inputText,setInputText,category,setCategory,todos,setTodos}) => {

    // Submit handler
    const handleSubmit = (e) => {
        e.preventDefault();
        const taskDetails = {
        id: Math.floor(Math.random() * 100),
        title: inputText,
        complete: false
        }
        setTodos([...todos, taskDetails]);
        setInputText("");
    }
    
    return ( 
        <div className="form-wrapper">
            <form className="form" onSubmit={handleSubmit}>
                <div className="input-container">
                    <input type="text" placeholder="Whats your focus today" value={inputText} onChange={(e) => setInputText(e.target.value)}></input>
                    <button type="submit">
                       <FontAwesomeIcon icon={faPlus} className="add-icon"></FontAwesomeIcon>
                    </button>
                </div>

                <select name="category" onChange={(e) => setCategory(e.target.value)}>
                    <option value="all">ALL</option>
                    <option value="incomplete">INCOMPLETE</option>
                    <option value="complete">COMPLETE</option>
                </select>
            </form>
        </div>
    );
}

export default Form;