
export function TodoItem({completed,id,title,updateTodo,deleteTodo}){
    return(
        <li >
        {/*key={id} onChange={e=>updateTodo(todo.id,e.target.checked)}  onClick={()=>deleteTodo(todo.id)}*/}
          <input type="checkbox" checked={completed} onChange={e=>updateTodo(id,e.target.checked)} />
          <label className={completed ? "strike-through" : ""}>{title}</label>
          <input type="button" className='btn btn-danger' value={"Delete"} onClick={()=>deleteTodo(id)} />
        </li>
    );
}
