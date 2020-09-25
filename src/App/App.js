import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/Navbar/Navbar';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover'
import { Jumbotron } from 'react-bootstrap';


function App() {
  const edabitPopover = (
    <Popover>
      <Popover.Title></Popover.Title>
      <Popover.Content>
          Edabit is a site dedicated to interactive coding challenges. 
          <br/>
          <br/>
          &#11088; Here programmers can compare their solutions to the entire Edabit community's. Awesome! &#11088;
      </Popover.Content>
    </Popover>
  )
  const reactBootstrapPopover = (
    <Popover>
      <Popover.Title></Popover.Title>
      <Popover.Content>
          I'm quite comfortable working with Material-UI, but in recent times I've been working with nothing else. I'd like to get more knowledge of other existing libraries, if anything it will help me understand the current libraries from a new lense.
          <br/>
          <br/>
          &#11088; Also! There's an awesome community working with React-Bootstrap!&#11088;
      </Popover.Content>
    </Popover>
  )
  const practicePopover = (
    <Popover>
      <Popover.Title></Popover.Title>
      <Popover.Content>
          I've been working on learning the WordPress CMS to add it to my repertoire!
          <br/>
          <br/>
          &#11088; Nearly 1/3 of all websites are made with WordPress, I'd love to see what the commotion is!&#11088;
      </Popover.Content>
    </Popover>
  )
  return (
    <div className="App">
      <Navbar/>
      <Jumbotron>
        <h1>Hey Welcome to my Practice Grounds!</h1>
        <p>Or one of them really.
          <br/>
          <br/>This site is being built as I learn React-Bootstrap and filled with content I learn from Edabit. 
        </p>
        <OverlayTrigger trigger="click" placement="top" overlay={edabitPopover}>
          <Button variant="success" className="mr-1">What is Edabit?</Button>
        </OverlayTrigger>
        <OverlayTrigger trigger="click" placement="top" overlay={reactBootstrapPopover}>
          <Button variant="success" className="mr-1">Why React-Bootstrap?</Button>
        </OverlayTrigger>
        <OverlayTrigger trigger="click" placement="top" overlay={practicePopover}>
          <Button variant="success">Other Practice Grounds?</Button>
        </OverlayTrigger>
      </Jumbotron>
    </div>
  );
}

export default App;
