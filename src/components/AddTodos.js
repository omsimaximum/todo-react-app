import {useState} from 'react';
const AddTodos = ({onAdd}) => {
        const [task, setTask] = useState('');
        const onSubmit = (e) => {
            e.preventDefault();
            if(!task){
                alert('Pleast Enter Task');
            }
            else{
                onAdd(task);
                setTask('');
            }
        }
    return ( 
        <>
        <form action="" id="list-inp" onSubmit={onSubmit}>
                <input type="text" value={task} onChange={(e) => {
                    setTask(e.target.value);
                }}/>
                <button type="submit">Add</button>
        </form>
        </>
     );
}
 
export default AddTodos;