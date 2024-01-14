import { useState } from "react";
import Form from "../Components/Form/Form";
import ListItem from "../Components/ListItem/ListItem";
import { appInt } from "./app.interface";


function App() {
    const [todo, setTodo] = useState([
        {id: 1, value: 'task1', done: false},
        {id: 2, value: 'task2', done: false},
        {id: 3, value: 'task3', done: false},
        {id: 4, value: 'task4', done: true},
    ]);

    return (
        <div className="wrapper-card">
            <Form/>
            <ul className="todo-list">
                <ListItem/>
            </ul>
        </div>
    );
}

export default App;