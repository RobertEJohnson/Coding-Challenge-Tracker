import React, {Component} from 'react';
import { MDBCollapse, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBNavItem, MDBNavLink } from 'mdbreact';
import {BrowserRouter as Router} from 'react-router-dom';
class ReactBootstrapNavbar extends Component{
    state={
        open: false
    }

    toggleCollapse=()=>{
        this.setState({
            open: !this.state.open
        })
    }
    
    render(){
        let anchorStyle ={
            textDecoration: 'none'
        }
        return(
            <Router>
                <MDBNavbar dark fixed='top' className='elegant-color' expand='lg'>
                    <MDBNavbarBrand>Edabit Learning</MDBNavbarBrand>
                    <MDBNavbarToggler className='navbar-light' onClick={this.toggleCollapse} />
                    <MDBCollapse navbar isOpen={this.state.open}>
                        <MDBNavbarNav right>
                        <MDBNavItem>
                            <a style={anchorStyle} href="https://github.com/RobertEJohnson" target='_blank'>Rob's GitHub Portfolio</a>
                        </MDBNavItem>
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBNavbar>
            </Router>
        )
    }
}

export default ReactBootstrapNavbar;