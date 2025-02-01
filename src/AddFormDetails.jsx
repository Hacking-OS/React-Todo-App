import {NewTodoForm} from './NewTodoForm'
import {TodoList} from './TodoList'
import PropTypes from 'prop-types';

export function AddFormDetails({todos,AddNewTodos,updateTodo,deleteTodo}) {
    return(
        <><NewTodoForm onSubmit={AddNewTodos} /><div className='list'>
            <h1>Header List</h1>
            <TodoList todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo} />
        </div></>
    );
}

AddFormDetails.propTypes = {
    todos: PropTypes.array.isRequired,
    AddNewTodos: PropTypes.func.isRequired,
    updateTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
};