import React, {Component} from 'react';
import {MDBAnimation} from 'mdbreact';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';

class CustomCard extends Component{
    state = {
        date: this.props.date,
        title: this.props.title,
        text: this.props.text,
        animation: this.props.animation
    }
    render(){
        return(
            <MDBAnimation type={this.props.animation} reveal>
                <MDBCard>
                    <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
                    <MDBCardBody>
                    <MDBCardTitle>{this.props.title}</MDBCardTitle>
                    <MDBCardText>
                        {this.props.text}
                    </MDBCardText>
                        <MDBBtn>Learning Notes</MDBBtn>
                        <MDBBtn>Learning Notes</MDBBtn>
                    </MDBCardBody>
                </MDBCard>
          </MDBAnimation>
        )
    }
}

export default CustomCard;