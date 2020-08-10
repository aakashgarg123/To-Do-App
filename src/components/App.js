import React from 'react';
import './App.css';
import InputToDo from './inputToDo';

class App extends React.Component {
    render() {
        return (
            <div className="content">
                <div>
                   <h1>TODO LIST</h1>
                   <InputToDo />
                </div>
                
            </div>
        )
    }
}

export default App;