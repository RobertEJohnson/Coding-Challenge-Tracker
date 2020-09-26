import React, {Component} from 'react';
import { MDBIcon, MDBCollapse, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBNavItem, MDBNavLink } from 'mdbreact';
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
                <MDBNavbar color='elegant-color' dark scrolling fixed='top' expand='lg'>
                    <MDBNavbarBrand>Coding Challenges</MDBNavbarBrand>
                    <MDBNavbarToggler className='navbar-light' onClick={this.toggleCollapse} />
                    <MDBCollapse navbar isOpen={this.state.open}>
                        <MDBNavbarNav right>
                        <MDBNavItem>
                             <a style={anchorStyle} href="https://github.com/RobertEJohnson" target='_blank'>
                                <MDBIcon size='lg' fab style={{color:'white'}} icon="github" />
                                {'\u00A0'}Rob's GitHub Portfolio
                            </a>
                        </MDBNavItem>
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBNavbar>
            </Router>
        )
    }
}

export default ReactBootstrapNavbar;