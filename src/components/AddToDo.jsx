import React, {useState} from 'react';

function AddToDo({ addToDo }) {

    const [title, setTitle] = useState('');

    function handleChange(event) {
        const value = event.target.value;
        console.log(value);
        setTitle(value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        addToDo(title);
        setTitle('');
    }

    return ( 
        <form className="form" onSubmit={handleSubmit} >
            <div>
                <label className="form__label">~ Today I need to ~</label>
                <input
                    onChange={handleChange}
                    className="form__input"
                    type="text" 
                    name="title"
                    size="30"
                    value={title}
                />
                <button className="button">
                    <span>Submit</span>
                </button>
            </div>
        </form>
    );
}
 
export default AddToDo;