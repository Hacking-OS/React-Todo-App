import { useState } from 'react'
// eslint-disable-next-line react/prop-types
export function NewTodoForm({onSubmit}){
   const [newItem,SetNewItem] = useState("");
    function handleSubmit(e){
        e.preventDefault();
        console.log("prevented submit");
        // AddTodos(currentTodos => {return [
        //   ...currentTodos,{id:crypto.randomUUID(),title:newItem,completed:false}
        // ]
        // });
        if(newItem==='') return;
        onSubmit(newItem);
        SetNewItem("");
    }

    return (
        <form onSubmit={handleSubmit} className='new-item-form'>
        <label htmlFor='item'>Item</label>
          <input type="text" value={newItem} onChange={(e)=>SetNewItem(e.target.value)} id='item'/>
          <button type="submit" className='btn btn-primary'>ADD</button>
        </form>
    )
}