import React, {useState} from 'react';
import AddToDo from './components/AddToDo';
import Heading from './components/Heading';
import ToDoList from './components/ToDoList';
import uuid from 'uuid/v1';


function App() {

    const [items, setItems] = useState([
        {
            id: 0,
            title: 'buy milk'
        }
    ]);

    function addToDo(title) {
        setItems([...items, {title: title, id: uuid()}]);
    }

    function removeToDo(id) {
        setItems(items.filter((item) => (item.id !== id)));
    }

    return (
        <div className="App">
            <section className="container">
            <Heading />
            <AddToDo addToDo={addToDo} />
            <ToDoList items={items} removeToDo={removeToDo} />
            </section>
        </div>
    );
}

export default App;
