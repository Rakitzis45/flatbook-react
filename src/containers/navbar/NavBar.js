import React from 'react';
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {logout} from '../../actions/user'
class NavBar extends React.Component {

    handleClick = (event)=>{
        this.props.logout(this.props.history)
    }

    render() {
        return <div><button onClick={this.handleClick}>Logout</button></div>
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        logout: (history)=> dispatch(logout(history))
    }
}

export default withRouter(connect(null, mapDispatchToProps)(NavBar))