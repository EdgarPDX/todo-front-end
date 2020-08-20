import React, { Component } from 'react'
import { signIn, signUp } from './todo-api.js'

export default class AuthPage extends Component {
    state = {
        signInEmail:'',
        signInPassword:'',
        signUpEmail:'',
        signUpPassword:''
    }

    handleSignIn = async (e) => {
        e.preventDefault();

        const user = await signIn({
            email: this.state.signInEmail,
            password: this.state.signInPassword
        });

        this.props.handleToken(user.body.token);
        this.props.history.push('/');
    }

    handleSignUp = async (e) => {
        e.preventDefault();

        const user = await signUp({
            email: this.state.signUpEmail,
            password: this.state.signUpPassword
        });

        this.props.handleToken(user.body.token);
        this.props.history.push('/');
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSignIn}>
                    SIGN IN
                    <label>
                        EMAIL
                        <input onChange={e => this.setState({ signInEmail: e.target.value})} value={this.state.signInEmail}/>
                    </label>
                    <label>
                        PASSWORD
                        <input type='password' onChange={e => this.setState({ signInPassword: e.target.value })} value={this.state.signInPassword}/>
                    </label>
                    <button>Login</button>
                </form>

                <form onSubmit={this.handleSignUp}>
                    SIGN UP
                    <label>
                        EMAIL
                        <input onChange={e => this.setState({ signUpEmail: e.target.value})} value={this.state.signUpEmail}/>
                    </label>
                    <label>
                        PASSWORD
                        <input type='password' onChange={e => this.setState({ signUpPassword: e.target.value })} value={this.state.signUpPassword}/>
                    </label>
                    <button>Submit</button>
                </form>
                
            </div>
        )
    }
}
