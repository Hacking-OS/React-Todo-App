import { TodoItem } from "./TodoItems"

export function TodoList({todos,updateTodo,deleteTodo}){
    // const [todos,AddTodos]=useState([]);
 {/* onChange={e=>updateTodo(todo.id,e.target.checked)}  onClick={()=>deleteTodo(todo.id)}*/}
    return (
        <ul>
        {todos.length<=0 && "No Todos"}
        {todos.map(todo=>{
          return (
          <TodoItem {...todo} key={todo.id} updateTodo={updateTodo} deleteTodo={deleteTodo}/>
          )
        })}
    
          {/* <TodoItem completed={todo.completed} id={todo.id} title={todo.title} key={todo.id}/> */}
         </ul>
    )
}
