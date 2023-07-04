import React, { useState } from "react";
import './styles.css';
import todo from "./todo";


function UpperSection() {
    const [nText, setNtext] = useState("");
    const [nTitle, setNtitle] = useState('');
    const [updateTodo, setUpdateTodo] = useState(todo);
    
    function submitTodo(event) {
        todo.push({
            title: nTitle,
            text: nText,
        });
        setUpdateTodo(todo);
        todo.map(setUpdateTodo);
        setNtext('');
        setNtitle('');
        event.preventDefault();
    };

    function todobox(props) {
        return <div className="todo-text-box">
            <p className="title">{props.title}</p>
            <p className="text">{props.text}</p>
        </div>
    }

    function changeInput(event) {
        setNtext(event.target.value);
    }

    function changeTitle(event) {
        setNtitle(event.target.value)

    }
    return  <section>
                <section>
                    <h1>Todo-List</h1>

                    <form onSubmit={submitTodo}>
                        <div className="input-div">
                            <input value={nTitle} onChange={changeTitle} className="todo-input" type="text" placeholder="Title" />
                            <textarea multiple='true' value={nText} onChange={changeInput} className="todo-input" type="text" placeholder="todo" />
                        </div>
                        <button className="submit-form" type="submit">Submit</button>
                    </form>

                    



                </section>

                <section className="lower-section">
                    <p className="todo-list">Todo Lists</p>
                    <div className="grid">
                    {todo.map(todobox)}
                    </div>
                </section>
                
            </section>
};

export default UpperSection;