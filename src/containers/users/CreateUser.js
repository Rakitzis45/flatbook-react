import React, { Component } from 'react';
import {connect} from 'react-redux'
import {loginUser} from '/home/rakitzis45/flatbook/flatbook-react/src/actions/user.js'
import { withRouter } from 'react-router-dom';

class CreateUser extends Component {
    state = { 
        user: "",
        password: ""
    }
   handleChange = event => {
       this.setState({
           [event.target.name]: event.target.value
       })
   }
   handleSubmit = event => {
       event.preventDefault()
       let user = {email: this.state.user, password: this.state.password}
       this.props.loginUser(user, this.props.history)
   }
    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Email:</label>
                    <input type="text" value={this.state.user} onChange={this.handleChange} name='user'/>
                    <br/>
                    <label> Password: </label>
                    <input type="password" value={this.state.password} onChange={this.handleChange} name='password'/>
                    <input type="submit"/>
                </form> 
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return {
        loginUser: (user, history) => dispatch(loginUser(user, history))
    }
}

export default withRouter(connect(null, mapDispatchToProps)(CreateUser))