import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserShow extends Component {
    render(){
        return (
            <>
                {this.props.user.email}
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(UserShow)