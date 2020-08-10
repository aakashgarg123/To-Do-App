import React from 'react';
import './Todos.css';

function Todos(props) {
    const {todos} = props

    const handleRemove = (id) => {
        props.handleRemoval(id)
        
    }
    
    const renderedList = todos.map((todo) => {
        return(
            <div onClick={ () => handleRemove(todo.id)} className="ui floating message" key={todo.id}>
               
                
                <div className="header">
                    <p>{todo.text}</p>
                </div>
                
            </div>
        )
    })
    return (
        <div>
          
            {renderedList}
        </div>
    )
}

export default Todos;
