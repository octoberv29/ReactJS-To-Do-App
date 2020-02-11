import React, { createContext, useState, useEffect } from 'react';
import uuid from 'uuid/v1';

export const ToDoContext = createContext(); // firstly, create context

function ToDoContextProvider(props) {       // then, create a provider for this context

    const localData = localStorage.getItem('items');
    const [items, setItems] = useState(localData ? JSON.parse(localData) : [{title: 'buy milk', id:uuid()}]);
    
    function addToDo(title) {
        setItems([...items, {title: title, id: uuid()}]);
    }

    function removeToDo(id) {
        setItems(items.filter((item) => (item.id !== id)));
    }

    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(items));
    }, [items]);

    return (  
        <ToDoContext.Provider value={{ items, addToDo, removeToDo }}>
            { props.children }
        </ToDoContext.Provider>
    );
}
 
export default ToDoContextProvider;