import React from 'react';
import ToDoDetails from './ToDoDetails';

function ToDoList( {items, removeToDo} ) {

    const showToDos = items.slice(0).reverse().map((item) => (<ToDoDetails key={item.id} item={item} removeToDo={removeToDo} />));

    return (  
        <div>
            <ul className="toDoList">
                { showToDos }
            </ul>
        </div>
    );
}
 
export default ToDoList;