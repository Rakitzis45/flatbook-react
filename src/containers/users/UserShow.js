import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserShow extends Component {
    render(){
        // debugger
        return (
            <>
                {this.props.user.email}
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.currentUser
    }
}

export default connect(mapStateToProps)(UserShow)