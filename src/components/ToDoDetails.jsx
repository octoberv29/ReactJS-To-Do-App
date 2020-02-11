import React from 'react';

function ToDoDetails({ item, removeToDo }) {

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