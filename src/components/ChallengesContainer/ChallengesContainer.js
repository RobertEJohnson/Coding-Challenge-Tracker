import React, {Component} from 'react';
import { MDBRow, MDBContainer} from "mdbreact";
import CustomCard from '../Card/Card';

class ChallengesContainer extends Component{
  state={
    months: [
      {name: 'October'}, 
      {name: 'November'},
      {name: 'December'},
      {name: 'January'},
      {name: 'February'},
      {name: 'March'},
      {name: 'April'},
      {name: 'May'},
      {name: 'June'},
      {name: 'July'},
      {name: 'August'},
      {name: 'September'},
    ]
  }
  render(){
    return(
      <MDBContainer>
        <MDBRow>
          {
            this.state.months.map(month=>{
                return <CustomCard date={month.name}/>;
            })    
          }
        </MDBRow>
      </MDBContainer>
      )
  }
}

export default ChallengesContainer;