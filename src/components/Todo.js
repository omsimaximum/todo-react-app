import {FaCheck} from 'react-icons/fa';
import {MdClose} from 'react-icons/md';
import { useState} from 'react';
const Todo = ({todo, onDelete}) => {
    const [checked, setChecked] = useState(false);
    return ( 
        <li>
            <p className="item" style={{textDecoration: checked ? 'line-through' : 'none'}}>
                {todo.task}
            </p>
            <div className="action">
                <p className="check" onClick ={() => { setChecked(!checked)}}><FaCheck style={{color: checked ? '#4cbb17' : 'white'}}/></p>
                <p className="delete" onClick={() => onDelete(todo.id)}><MdClose /></p>
            </div>
        </li>
     );
}
 
export default Todo;