import React, {Component} from 'react';
import { MDBPopover, MDBPopoverBody, MDBPopoverHeader, MDBBtn, MDBAnimation } from "mdbreact";

class PopoverButton extends Component{
    render(){
        return(
         
            <MDBPopover placement="top" popover clickable>   
                <MDBBtn>{this.props.title}</MDBBtn>
                 <div className='text-center'>
        <MDBPopoverHeader>&#11088;{'\u00A0'}{this.props.title}{'\u00A0'}&#11088;</MDBPopoverHeader>
                    <MDBPopoverBody>{this.props.text}</MDBPopoverBody>
                </div>     
            </MDBPopover>
         
        )
    }
}

export default PopoverButton;