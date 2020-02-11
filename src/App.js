import React from 'react';
import AddToDo from './components/AddToDo';
import Heading from './components/Heading';
import ToDoList from './components/ToDoList';
import ToDoContextProvider from './contexts/ToDoContext';

function App() {

    return (
        <div className="App">
            <section className="container">
                <ToDoContextProvider>
                    <Heading />
                    <AddToDo />
                    <ToDoList/>
                </ToDoContextProvider>
            </section>
        </div>
    );
}

export default App;
