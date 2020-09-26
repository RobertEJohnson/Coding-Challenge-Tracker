import React, {Component} from 'react';
import { MDBCol, MDBRow, MDBContainer,  } from "mdbreact";
import CustomCard from '../Card/Card';

class ChallengesContainer extends Component{
    render(){
        return(
            <MDBContainer>
                <MDBRow className="mb-4">
                  <MDBCol xs={12} md={4}>
                    <CustomCard animation='fadeInLeft' date='September 24th 2020' title='Edabit Challenge' text=''/>
                  </MDBCol>
                  <MDBCol xs={12} md={4}>
                    <CustomCard animation='fadeIn' date='September 24th 2020' title='Edabit Challenge' text=''/>
                  </MDBCol>
                  <MDBCol xs={12} md={4}>
                    <CustomCard animation='fadeInRight' date='September 24th 2020' title='Edabit Challenge' text=''/>
                  </MDBCol>
                </MDBRow>
                <MDBRow className="mb-4">
                  <MDBCol xs={12} md={4}>
                    <CustomCard animation='fadeInLeft' date='September 24th 2020' title='Edabit Challenge' text=''/>
                  </MDBCol>
                  <MDBCol xs={12} md={4}>
                    <CustomCard animation='fadeInUp' date='September 24th 2020' title='Edabit Challenge' text=''/>
                  </MDBCol>
                  <MDBCol xs={12} md={4}>
                    <CustomCard animation='fadeInRight' date='September 24th 2020' title='Edabit Challenge' text=''/>
                  </MDBCol>
                </MDBRow>
                <MDBRow className="mb-4">
                  <MDBCol xs={12} md={4}>
                    <CustomCard animation='fadeInLeft' date='September 24th 2020' title='Edabit Challenge' text=''/>
                  </MDBCol>
                  <MDBCol xs={12} md={4}>
                    <CustomCard animation='fadeInUp' date='September 24th 2020' title='Edabit Challenge' text=''/>
                  </MDBCol>
                  <MDBCol xs={12} md={4}>
                    <CustomCard animation='fadeInRight' date='September 24th 2020' title='Edabit Challenge' text=''/>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
        )
    }
}

export default ChallengesContainer;