import React, { Component } from 'react';
import {connect} from 'react-redux'

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
    render(){
        return (
            <div>
                <form>
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
        loginUser: (user, password, history) => dispatch(loginUser(user, password, history))
    }
}

export default connect(null, mapDispatchToProps)(CreateUser)