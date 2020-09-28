import React, {Component} from 'react';
import './App.css';
import Navbar from '../components/Navbar/Navbar';
import ChallengesContainer from '../components/ChallengesContainer/ChallengesContainer';
import YearlyCharts from '../components/YearlyCharts/YearlyCharts';
import PopoverButton from '../components/PopoverButton/PopoverButton';
import { MDBAnimation, MDBBtnGroup, MDBBtn, MDBRow, MDBCol, MDBJumbotron } from "mdbreact";

class App extends Component{
  state={
    showMonthlyCharts: true,
    showYearlyCharts: false,
    showRecaps: false
  }
  handleChallenges=()=>{
    if(!this.state.showMonthlyCharts){
      this.setState({
      showYearlyCharts: false,
      showRecaps: false,
      showMonthlyCharts: true,
    })
    }
  }
  handleCharts=()=>{
    if(!this.state.showYearlyCharts){
      this.setState({
      showMonthlyCharts: false,
      showRecaps: false,
      showYearlyCharts: true,
    })
    }
  }
  handleRecaps=()=>{
    if(!this.state.showRecaps){
      this.setState({
      showYearlyCharts: false,
      showMonthlyCharts: false,
      showRecaps: true,
    })
    }
  }
  render(){
    const codingChallengesText = 
      'I am tracking progress from CodeWars, Edabit, and LeetCode. They are sites with awesome interactive coding challenges!';
    const learnMDBText =
      'For fun! I love Bootstrap and I love Material-UI, it seemed like the natural next step to experiment with MDB.';
    const practiceGroundsText =
      "I'm learning WordPress right now as well! Companies I love use it, and nearly 30% of all sites operate on the WordPress CMS!";
  return (
    <div className="App">
        <Navbar/>
        <MDBJumbotron className='mt-5'>
          <h1>Hey Welcome to my Practice Grounds!</h1>
          <p>Or one of them really.
            <br/>
            <br/>Built with Material-Design-Bootstrap (MDB). It's filled with some tracking information of various coding challenges.. 
          </p>
          <MDBAnimation reveal delay='.3s' type="fadeIn" className='inline-block'>
            <PopoverButton title='Coding Challenges?' text={codingChallengesText}/>
          </MDBAnimation>
          <MDBAnimation reveal delay='.45s' type="fadeIn" className='inline-block'>
            <PopoverButton title='Why Learn MDB?' text={learnMDBText}/>
          </MDBAnimation>
            <MDBAnimation reveal delay='.6s' type="fadeIn" className='inline-block'>
              <PopoverButton title='Other Practice Grounds?' text={practiceGroundsText}/>
            </MDBAnimation>
        </MDBJumbotron>
        <MDBRow>
          <MDBCol md='12' className="mb-4">
            <MDBBtnGroup size="md">
            <MDBBtn color="amber"
                onClick={this.handleRecaps} active={this.state.showRecaps}>Challenges and Reflections</MDBBtn>
              <MDBBtn color="amber"
                onClick={this.handleChallenges} active={this.state.showMonthlyCharts}>Monthly Tracking Charts</MDBBtn>
              <MDBBtn color="amber" {...this.state.showYearlyCharts}
                onClick={this.handleCharts} active={this.state.showYearlyCharts}>Yearly Tracking Chart</MDBBtn>
            </MDBBtnGroup>
          </MDBCol>
        </MDBRow>
        {
          this.state.showMonthlyCharts ? 
            <>
              <ChallengesContainer/>
            </>
              :
            <>
            </>
        }
        {
          this.state.showYearlyCharts ? 
            <>
              <YearlyCharts/>
            </>
              :
            <>
            </>
        }
    </div>
  );
  }
}

export default App;
