import React, { Component } from 'react'
import { fetchTodos } from './todo-api.js'


export default class ListTodos extends Component {
    state = {
        todos: []
    }

    componentDidMount = async () => {
        if (!this.props.token) {
            this.props.history.push('/login');
        } else {
            const data = await fetchTodos(this.props.token)

            this.setState({
                todos: data.body
            })
        }
    }
    render() {
        return (
            <div className='todos-list'>
                <h1>Your Todo's</h1>
                {
                    this.state.todos.map((todo) => {
                    return <span>{todo.todo}</span>
                    })
                }
                
            </div>
        )
    }
}
