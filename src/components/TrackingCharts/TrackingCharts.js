import React from "react";
import { Line } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";

class ChartsPage extends React.Component {
  state = {
    dataLine: {
      labels: ["Week 1","Week 2", "Week 3", "Week 4", "Week 5"],
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
        scales: { yAxes: [ { ticks: { max: 50, min: 0 } } ] }
    }
  };

  render() {
    return (
      <MDBContainer>
        <h3>Completed Challenges This Month</h3>
        <Line data={this.state.dataLine} options={this.state.chartOptions} />
        <h4 className='mt-4'>Completed Challenges This Year</h4>
        <Line data={this.state.dataLine} options={this.state.chartOptions} />
      </MDBContainer>
    );
  }
}

export default ChartsPage;