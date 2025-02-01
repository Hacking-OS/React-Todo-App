import {NewTodoForm} from './NewTodoForm'
import {TodoList} from './TodoList'

export function AddFormDetails({todos,AddNewTodos,updateTodo,deleteTodo}) {
    return(
        <><NewTodoForm onSubmit={AddNewTodos} /><div className='list'>
            <h1>Header List</h1>
            <TodoList todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo} />
        </div></>
    );
}
