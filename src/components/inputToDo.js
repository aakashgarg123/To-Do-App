import React, { useState } from 'react'
import Todos from './Todos'

window.id = 3;
function InputToDo() {
    const [todos, setTodos] = useState(
        [
           {id:1, text:'Walk the dog'},
           {id: 2, text: 'Order Veggies'}
        ]
    )
    const [currentToDo,setCurrentToDo] = useState('')
    const handleKeyDown = (e) => {
        if(e.key === 'Enter') {
           const newTodo = new Object();
           newTodo.id = window.id
           newTodo.text = currentToDo;
           todos.push(newTodo)
           setTodos(todos)
           setCurrentToDo('')
           window.id++
           
        }
    }
    const removeTodo = (id) => {
        
        const filteredTodos = todos.filter((todo) => {
            if(todo.id !== id) return todo;
        })
        
        setTodos(
            filteredTodos
        )
    }
    
    return (
        <div>
            <div className="ui massive icon input">
                <input type="text" placeholder="Add Todo..." value={currentToDo} style={{width: '500px'}} onChange={e => setCurrentToDo(e.target.value)} onKeyDown={handleKeyDown}/>
                <i className="pencil alternate icon"></i>
            </div>
            
            <div className="todos">
                <Todos todos={todos} handleRemoval={removeTodo}/>
            </div>
            
        </div>
    )
}

export default InputToDo
