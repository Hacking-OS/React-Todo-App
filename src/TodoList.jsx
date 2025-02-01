import { TodoItem } from "./TodoItems"
import PropTypes from 'prop-types';

export function TodoList({todos,updateTodo,deleteTodo}){
    // const [todos,AddTodos]=useState([]);
 {/* onChange={e=>updateTodo(todo.id,e.target.checked)}  onClick={()=>deleteTodo(todo.id)}*/}
 return (
  <ul>
    {!todos || todos.length === 0 ? "No Todos" : todos.map(todo => (
      <TodoItem 
        {...todo} 
        key={todo.id} 
        updateTodo={updateTodo} 
        deleteTodo={deleteTodo} 
      />
    ))}
  </ul>
)
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  AddNewTodos: PropTypes.func.isRequired,
  updateTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
};