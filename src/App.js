import React, { Component } from 'react';
import {
    BrowserRouter as Router, 
    Route, 
    Switch,
    Link,
    
  } 
from 'react-router-dom';
import AuthPage from './AuthPage.js';
// import DetailTodo from './DetailTodo.js';
import ListTodos from './ListTodos.js';
import CreateTodoPage from './CreateTodoPage.js';

export default class App extends Component {
    state = {
        token: localStorage.getItem('token')
    }

    handleToken = (token) => {
        this.setState({
            token: token
        })

        localStorage.setItem('token', token)
    }

    render() {
        return (
            <div>
                <Router>
                    <main>
                        <header>
                            {
                                this.state.token &&
                                <>
                                    <Link to='/'>TODO LIST</Link>
                                    <Link to='/createtodo'>CREATE A TODO</Link>
                                </>
                            }
                            
                        </header>
                        <Switch>
                            <Route 
                                path="/login" 
                                exact
                                render={(routerProps) => <AuthPage handleToken={this.handleToken} token={this.state.token} {...routerProps} />} 
                            />
                            <Route 
                                path="/" 
                                exact
                                render={(routerProps) => <ListTodos token={this.state.token} {...routerProps} />} 
                            />
                            <Route 
                            path="/createtodo"
                            exact
                            render={(routerProps) => <CreateTodoPage handleToken={this.handleToken} token={this.state.token} {...routerProps} />} 
                            />
                        </Switch>
                    </main>
                </Router>
            </div>
        )
    }
}