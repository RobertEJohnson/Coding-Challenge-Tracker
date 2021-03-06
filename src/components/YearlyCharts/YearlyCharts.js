import React from "react";
import { Line } from "react-chartjs-2";
import { MDBContainer, MDBCard, MDBCardBody, MDBCardHeader, MDBAnimation } from "mdbreact";

class YearlyCharts extends React.Component {
  state = {
    dataLine: {
      labels: ["October 2020","November", "December", "January", "February", "March", "April", "May", "June", "July", "August", "September 2021"],
      datasets: [
        {
          label: "CodeWars",
          fill: true,
          backgroundColor: "rgb(219, 48, 36, .1)",
          borderColor: "rgb(219, 48, 36)",
          pointBorderColor: "rgb(219, 48, 36)",
          pointBorderWidth: 10,
          pointHoverRadius: 6,
          pointHoverBackgroundColor: "gold",
          pointHoverBorderWidth: 2,
          pointRadius: 2,
          data: []
        },
        {
          label: "Edabit",
          fill: true,
          backgroundColor: "rgb(2, 151, 2, .1)",
          borderColor: "rgb(2, 151, 2)",
          pointBorderColor: "rgb(2, 151, 2)",
          pointBorderWidth: 10,
          pointHoverRadius: 6,
          pointHoverBackgroundColor: "gold",
          pointHoverBorderWidth: 2,
          pointRadius: 2,
          data: []
        },
        {
            label: "LeetCode",
            fill: true,
            backgroundColor: "rgb(52, 146, 209,.1)",
            borderColor: "rgb(52, 146, 209)",
            pointBorderColor: "rgb(52, 146, 209)",
            pointBackgroundColor: "gold",
            pointBorderWidth: 10,
            pointHoverRadius: 6,
            pointHoverBackgroundColor: "gold",
            pointHoverBorderWidth: 2,
            pointRadius: 2,
            data: []
          }
      ]
    },
    chartOptions: { 
        responsive: true, 
        scales: { yAxes: [ { ticks: { max: 70, min: 0 } } ] }
    }
  };

  render() {
    return (
      <MDBContainer className='mb-4'>
        <MDBAnimation type='fadeIn' delay='.1s'>
          <MDBCard>
              <MDBCardHeader>
                Completed Challenges this Year
                <br/>October 2020 - September 2021
              </MDBCardHeader>
              <MDBCardBody>
                <Line data={this.state.dataLine} options={this.state.chartOptions} />
              </MDBCardBody>
          </MDBCard>
        </MDBAnimation>
      </MDBContainer>
    );
  }
}

export default YearlyCharts;