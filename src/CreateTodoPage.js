import React, { Component } from 'react'
import { createTodos } from './todo-api.js';

export default class CreateTodoPage extends Component {
    state = {
        todo: '',
        completed: false
    }

    componentDidMount = async () => {
        if (!this.props.token) {
            this.props.history.push('/login');
        }; 
    }

    handleSubmit = async (e) =>{
        e.preventDefault();

        try {
            await createTodos({
                todo: this.state.todo,
                completed: this.state.completed
            });

            this.setState({
                todo: '',
                completed: false
            });
            
            this.props.history.push('/')

        } catch(e) {
            console.log(e.message)
        }
    }
    
    handleTodoChange = e => {
        this.setState({
            todo : e.target.value
        })
    }
    render() {
        return (
            <div>
                <h1>CREATE A TODO</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        WHAT DO YOU NEED TO DO?
                        <input onChange={this.handleTodoChange} value={this.state.todo}/>
                    </label>
                    <button>ADD TODO</button>
                </form>
                
            </div>
        )
    }
}
