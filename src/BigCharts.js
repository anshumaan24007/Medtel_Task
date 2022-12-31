import React from 'react';
import PropTypes from 'prop-types';
import './BigCharts.css';
import { ReactSVG } from 'react-svg';
import ratioIcn from './assets/Group 428.svg';
import tglevel from './assets/Group 429.svg';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

function BigCharts(props) {

    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
      );

    const labels = ['JAN','MAR','MAY', 'JUL', 'SEP','DEC'];
    const data = {
        labels: labels,
        datasets: [{
          data: [220,230,190,200,180,185],
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1,
        }]
      },
      options = {
        responsive: true,
        plugins: {
          legend: {
            display:false,
          },
          title: {
            display: false,
          }
        }, 
        scales:
        {
            y: {
                grid: {
                    display:false,
                },
                ticks: {
                    beginAtZero: false,
                    stepSize:40
                  }
            }
        }
      };
  return (
    <div className="BigChartOuterContainer">
      <div className="BigChartMainContainerGreen">
        <div className="innerContainer">
        <div className="headerBar">
        <div className="topIcon"><ReactSVG src={true?ratioIcn:tglevel} className="topIconSVG"/></div>
        <div className="headerBC">{"Header"}<span className="subHeaderBC">{"Sub Header"}</span></div>
        <div className="subContainerBC"><div className="resultGBC">{"100 mg/dl"}</div>
        </div>        
        </div>
        <div className="parentContainerBC">
            <Line
                data={data}
                options={options}  
                
            />
        </div>
        </div>
      </div>
      <div className="remarkTextContainerBC"><div className="remarkTextBC">{"Your total cholesterol is within Desirable range. Good job at maintaining it!"}</div></div>
      </div>
  )
}

BigCharts.propTypes = {}

export default BigCharts
