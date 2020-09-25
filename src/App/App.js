import React from 'react';
import './App.css';
import Navbar from '../components/Navbar/Navbar';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover'
import { Container, Card, Jumbotron, Row, Col } from 'react-bootstrap';
import {MDBAnimation} from 'mdbreact';
import CustomCard from '../components/Card/Card';

function App() {
  const reactBootstrapPopover = (
    <Popover>
      <Popover.Title></Popover.Title>
      <Popover.Content>
          I love Material-UI, I love Bootstrap. I wanted to learn both MDB and React-Bootstrap!
          <br/>
          <br/>
          &#11088; Easy comparison, fun experience &#11088;
      </Popover.Content>
    </Popover>
  )
  const practicePopover = (
    <Popover>
      <Popover.Title></Popover.Title>
      <Popover.Content>
          I've been making WordPress sites as well! I'll share them if you're nice :))
          <br/>
          <br/>
          &#11088; 30% of websites are WordPress&#11088;
      </Popover.Content>
    </Popover>
  )
  return (
    <div className="App">
        <Navbar/>
        <Jumbotron className='mt-5'>
          <h1>Hey Welcome to my Practice Grounds!</h1>
          <p>Or one of them really.
            <br/>
            <br/>Built with React-Bootstrap and Material-Design-Bootstrap (MDB). It's filled with content I learn from Edabit. 
          </p>
          <MDBAnimation reveal type="pulse">
            <OverlayTrigger trigger="click" placement="top" overlay={reactBootstrapPopover}>
              <Button variant="success" className="mr-1">Why use both libraries?</Button>
            </OverlayTrigger>
            <OverlayTrigger trigger="click" placement="top" overlay={practicePopover}>
              <Button variant="success">Other Practice Grounds?</Button>
            </OverlayTrigger>
          </MDBAnimation>
        </Jumbotron>
        <Container>
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
        </Container>

    </div>
  );
}

export default App;
