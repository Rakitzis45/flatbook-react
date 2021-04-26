import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Button } from 'react-bootstrap'

class UserShow extends Component {
    render(){
        // debugger
        return (
            <>
                {this.props.user.name}<br/>
                {this.props.user.phone}<br/>
                {this.props.user.email}<br/>
                {this.props.user.linkedin}<br/>
                {this.props.user.github}<br/>
                {this.props.user.twitter}<br/>
                {this.props.user.facebook}<br/>
                {this.props.user.youtube}<br/>
                {this.props.user.instagram}<br/>
                
                {window.location.pathname.split('/')[2] == this.props.user.id ? <Button variant="outline-dark">Edit Profile</Button> : ""}
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