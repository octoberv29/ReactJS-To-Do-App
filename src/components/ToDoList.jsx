import React, { useContext } from 'react';
import ToDoDetails from './ToDoDetails';
import { ToDoContext } from '../contexts/ToDoContext';

function ToDoList() {

    const { items } = useContext(ToDoContext);

    const showToDos = items.slice(0).reverse().map((item) => (<ToDoDetails key={item.id} item={item} />));

    return (  
        <div>
            <ul className="toDoList">
                { showToDos }
            </ul>
        </div>
    );
}
 
export default ToDoList;