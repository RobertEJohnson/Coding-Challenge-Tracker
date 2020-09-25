import React from 'react';
import './App.css';
import Navbar from '../components/Navbar/Navbar';
import { Row, Col } from 'react-bootstrap';
import CustomCard from '../components/Card/Card';
import PopoverButton from '../components/PopoverButton/PopoverButton';
import { MDBAnimation, MDBContainer, MDBJumbotron } from "mdbreact";

function App() {
  return (
    <div className="App">
        <Navbar/>
        <MDBJumbotron className='mt-5'>
          <h1>Hey Welcome to my Practice Grounds!</h1>
          <p>Or one of them really.
            <br/>
            <br/>Built with Material-Design-Bootstrap (MDB). It's filled with content I learn from Edabit. 
          </p>
          <MDBAnimation reveal type="pulse">
            <PopoverButton title='What is Edabit?' text='Edabit is a site devoted to interactive coding challenges. It is similar to CodeWars and LeetCode.'/>
            <PopoverButton title='Why Learn MDB?' text='I love Bootstrap and I love Material-UI, it seemed like the natural next step to experiment with MDB.'/>
            <PopoverButton title='Other Practice Grounds?' text="I'm learning WordPress right now as well! Companies I love use it, and nearly 30% of all sites operate on the WordPress CMS!"/>
          </MDBAnimation>
        </MDBJumbotron>
        <MDBContainer>
          <Row className="mb-4">
            <Col xs={12} md={4}>
              <CustomCard animation='fadeInLeft' date='September 24th 2020' title='Edabit Challenge' text=''/>
            </Col>
            <Col xs={12} md={4}>
              <CustomCard animation='fadeIn' date='September 24th 2020' title='Edabit Challenge' text=''/>
            </Col>
            <Col xs={12} md={4}>
              <CustomCard animation='fadeInRight' date='September 24th 2020' title='Edabit Challenge' text=''/>
            </Col>
          </Row>
          <Row className="mb-4">
            <Col xs={12} md={4}>
              <CustomCard animation='fadeInLeft' date='September 24th 2020' title='Edabit Challenge' text=''/>
            </Col>
            <Col xs={12} md={4}>
              <CustomCard animation='fadeInUp' date='September 24th 2020' title='Edabit Challenge' text=''/>
            </Col>
            <Col xs={12} md={4}>
              <CustomCard animation='fadeInRight' date='September 24th 2020' title='Edabit Challenge' text=''/>
            </Col>
          </Row>
          <Row className="mb-4">
            <Col xs={12} md={4}>
              <CustomCard animation='fadeInLeft' date='September 24th 2020' title='Edabit Challenge' text=''/>
            </Col>
            <Col xs={12} md={4}>
              <CustomCard animation='fadeInUp' date='September 24th 2020' title='Edabit Challenge' text=''/>
            </Col>
            <Col xs={12} md={4}>
              <CustomCard animation='fadeInRight' date='September 24th 2020' title='Edabit Challenge' text=''/>
            </Col>
          </Row>
        </MDBContainer>

    </div>
  );
}

export default App;
