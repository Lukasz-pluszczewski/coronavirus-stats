import React from 'react';
import { Line } from 'react-chartjs-2';

const LineChart = (props) => {

  const lineData = {
    labels: props.labels,
    datasets: [
      {
        fill: true,
        lineTension: 0.5,
        backgroundColor: props.backgroundColor,
        borderColor: props.borderColor,
        borderWidth: 2,
        pointRadius: 2,
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: props.borderColor,
        data: props.data
      }
    ]
  };

  const options = {
    title: {
      display: true,
      text: props.title,
      fontSize: 25,
      fontColor: '#ccc',
      fontStyle: 'normal'
    },
    legend: {
      display: false
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          precision: 0
        }
      }]
    }
  };

  return (
    <Line
      data={lineData}
      width={40}
      height={20}
      options={options}
    />
  );
};

export default LineChart;
