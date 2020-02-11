import React, { useContext } from 'react';
import { ToDoContext } from '../contexts/ToDoContext';

function ToDoDetails({ item }) {
    
    const { removeToDo } = useContext(ToDoContext);

    function handleDelete() {
        removeToDo(item.id);
    }

    return ( 
        <li onClick={handleDelete}>
            { item.title }
        </li>
    );
}
 
export default ToDoDetails;