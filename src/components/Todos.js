import Todo from "./Todo";
const Todos = ({todos, onDelete}) => {
    return ( 
        <div className="list">
            <ul>
                {todos.map(todo => (
                   <Todo key={todo.id} todo={todo} onDelete={onDelete} />
                ))}
            </ul>
        </div>
     );
}
 
export default Todos;