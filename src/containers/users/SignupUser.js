import React from 'react'
import {signupUser} from '../../actions/user'
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom';


class SignupUser extends React.Component {
    state = { 
        user: "",
        password: "",
        confimPassword: '',
        name: ''
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
 
    handleSubmit = event => {
        event.preventDefault()
        if(this.state.password === this.state.confimPassword){
        let user = {email: this.state.user, password: this.state.password, password_confirmation: this.state.confimPassword, name: this.state.name}
        this.props.signupUser(user, this.props.history)
        } else {
            alert('Passwords did not match')
        }
    }
 

    render(){
        return <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Email:</label>
                    <input type="text" value={this.state.user} onChange={this.handleChange} name='user'/>
                    <br/>
                    <label>Name:</label>
                    <input type="text" value={this.state.name} onChange={this.handleChange} name='name'/>
<br></br>
                    <label> Password: </label>
                    <input type="password" value={this.state.password} onChange={this.handleChange} name='password'/>
                    <lable> Confirm Password:</lable>
                    <input type='password' value={this.state.confirmPassword} onChange={this.handleChange} name='confimPassword'></input>
                    <input type="submit"/>
                </form> 
            </div>
    }


}

function mapDispatchToProps(dispatch){
    return {
        signupUser: (user, history) => dispatch(signupUser(user, history))
    }
}


export default withRouter(connect(null, mapDispatchToProps)(SignupUser))