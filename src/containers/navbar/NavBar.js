import React from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { logout } from '../../actions/user'

import {Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'


class NavBar extends React.Component {

    handleClick = (event) => {
        this.props.logout(this.props.history)
    }

    render() {
        
        return <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Flatbook</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Profile</Nav.Link>
                    <Nav.Link href="#pricing">Projects</Nav.Link>
                    <Nav.Link href="#pricing">Groups</Nav.Link>
                    
                    {this.props.loggedIn ? <Nav.Link onClick={this.handleClick} href="#pricing">Logout</Nav.Link> : ""}
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                </Form>
            </Navbar>
        </div>

    }
}

const mapStateToProps = (state) => {
    return {
        loggedIn: state.currentUser.id
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: (history) => dispatch(logout(history))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar))