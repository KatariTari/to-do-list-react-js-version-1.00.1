import React from 'react';
import './ToDoitem.css'

const Todoitem = props => {
    const resolvedClass = {
        textDecoration : 'line-through'
    }
    return (
        <div className="todo-item">
            <div className="description-wrapper">
            <p 
            style={props.complited == true ? resolvedClass : {}}
            >
            {props.description}
            </p>
            </div>
            <div className="input-wrapper">
                <input 
                type="checkbox"
                 defaultChecked={props.completed}
                 onChange={props.handelChange}
                 />
            </div>
        </div>
     )
    }

export default Todoitem; 

