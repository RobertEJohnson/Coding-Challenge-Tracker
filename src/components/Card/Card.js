import React, {Component} from 'react';
import {MDBAnimation} from 'mdbreact';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText } from 'mdbreact';
import skyscraperJpg from './skyscraper.jpg'

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
                    <MDBCardImage className="img-fluid" src={skyscraperJpg} waves />
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