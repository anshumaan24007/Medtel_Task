import React from 'react';
import './SmallChart.css';
import hldIcon from './assets/Group 674.svg';
import ldlIcon from './assets/Group 673.svg';
import vldlIcon from './assets/Group 790.svg';
import ratioIcon from './assets/Group 791.svg';
import {ReactSVG} from 'react-svg';

function SmallChart(props) {
  return (
    <div className="smallChartOuterContainer">
    {props.data.map(card=><div className="parDiv">
      <div className={card.uid === 1?"smallChartMainContainerRed":"smallChartMainContainerGreen"}>
        <div className="header">{card.header}<span className="subHeaderSC">{card.subHeader}</span></div>
        <div className="subContainer">
        <div className="iconContainer"><ReactSVG src={card.uid ===1?hldIcon:card.uid===2?ldlIcon:card.uid===3?vldlIcon:ratioIcon} className="cardIcon"/><div className={card.uid ===1?"result":"resultG"}>{card.resultValue}</div><div className={card.uid === 1?"comment":"commentG"}>{card.comment}</div></div>
        <div className="parentContainer">
            {card.labelVals.map
                (label=><div className="parentContainer1">
                    <div style={{background: label.color}} className="labelContainer"><span className='labelInfo1'>{label.numVal}</span><span className='labelInfo2'>{label.textVal}</span></div>
                </div>)
                
            }
        </div>
        </div>
      </div>
      <div className="remarkTextContainer"><div className="remarkText">{card.remarkText}</div></div>
      </div>)}
      </div>
  )
}



export default SmallChart;