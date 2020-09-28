import React, {Component} from 'react';
import {MDBAnimation} from 'mdbreact';
import { MDBCol, MDBCard, MDBCardBody, MDBCardHeader} from 'mdbreact';
import { Line } from "react-chartjs-2";

class CustomCard extends Component{
    state = {
        date: this.props.date,
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
            scales: { yAxes: [ { ticks: {min: 0, max: 10} } ] }
        }
    }

    render(){
    const cardStyle = {
        minHeight: '250px',  
    }
        return(
            <MDBCol xs={12} md={12} lg={6} className='mb-4'>
            <MDBAnimation type='fadeIn' delay='.1s' reveal>
                <MDBCard style={cardStyle}>
                    <MDBCardHeader>{this.props.date}<br/>
                        Completed Challenges
                    </MDBCardHeader>
                    <MDBCardBody>
                        <MDBAnimation type='fadeIn'>
                            <Line data={this.state.dataLine} options={this.state.chartOptions} />
                        </MDBAnimation>           
                    </MDBCardBody>
                </MDBCard>
          </MDBAnimation>
          </MDBCol>
        )
    }
}

export default CustomCard;
