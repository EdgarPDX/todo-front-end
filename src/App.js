import React, { Component } from 'react';
import {
    BrowserRouter as Router, 
    Route, 
    Switch,
  } 
from 'react-router-dom';
import AuthPage from './AuthPage.js';
import DetailTodo from './DetailTodo.js';
import ListTodos from './ListTodos.js';

export default class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route 
                            path="/login" 
                            exact
                            render={(routerProps) => <AuthPage {...routerProps} />} 
                        />
                        <Route 
                            path="/" 
                            exact
                            render={(routerProps) => <ListTodos {...routerProps} />} 
                        />
                        <Route 
                          path="/todos/:id" 
                          exact
                          render={(routerProps) => <DetailTodo {...routerProps} />} 
                        />
                    </Switch>
                </Router>
            </div>
        )
    }
}