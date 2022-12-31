import './App.css';
import profilePicture from './assets/profilePic.png';
import brandLogo from './assets/medtel-logo@2x.png';
import lipidLogo from './assets/Group 329.svg';
import notePadLogo from './assets/Group 723.svg';
import {ReactSVG} from 'react-svg';
import SmallChart from './SmallChart';
import BigCharts from './BigCharts';

function App(props) {
  return (
    <div className="App">
      <div className="mainContainer">
        <div className="dashBoardHeader">
          <div className="profilePictureContainer">
            <img src={profilePicture} className="profilePicture" alt="profilePic"></img>
          <div className="patientDetails">
            <div className="patientName"><span className="blueHeader">{"NAME:"}</span><span className="blackDetail">{"Raj"}</span></div>
            <div className="patientSubDetails">
            <div className="uniqueId spaceBetween"><span className="blueHeader">{"UHID:"}</span><span className="blackDetail"></span>{" A4R5DDTY856EFJU"}</div>
            <div className="patientAge spaceBetween"><span className="blueHeader">{"Age:"}</span><span className="blackDetail"></span>{" 41"}</div>
            <div className="dateFormat spaceBetween"><span className="blueHeader">{"Date:"}</span><span className="blackDetail"></span>{" 12/12/2022"}</div>
            <div className="patientHeight spaceBetween"><span className="blueHeader">{"Height:"}</span><span className="blackDetail"></span>{" 165cm"}</div>
            <div className="patientGender spaceBetween"><span className="blueHeader">{"Gender:"}</span><span className="blackDetail"></span>{" Male"}</div>
            <div className="patientWeight spaceBetween"><span className="blueHeader">{"Weight:"}</span><span className="blackDetail"></span>{" 58.95 Kg"}</div>
            </div>
          </div>
          </div>
          <div className="companyDetails">
            <div className="brandLogoContainer"><img className='brandLogo' src={brandLogo} alt="brandLogo"></img></div>
            <div className="contactAddress">{"No.1083, Third Floor, ‘Prince Arcade’, 5th Cross, 12th Main, HAL 2nd Stage, Indiranagar, Bangalore-560 008"}</div>
          </div>
        </div>
        <div className="subHeader">
          <div className="subHeaderContent">
          <ReactSVG src={lipidLogo} className="dropIconSVG"/>
          <span className="lipidProfile">{"Lipid profile"}</span>
          </div>
        </div>
        <div className="dashBoardBody">
          <div className="notepadData">
            <div className="notepadInnerContainer">
            <ReactSVG src={notePadLogo} className="notePadLogo"/>
            <span className="notePadDetails">{"It is a combination of blood tests that measures cholesterol and triglycerides in the blood. Total cholesterol indicates the amount of total cholesterol in the body. High density lipoprotein(HDL) also known as good cholesterol absorbs and eliminate cholesterol from the bloodstream. Low density lipoprotein(LDL) also known as bad cholesterol builds up on the walls of blood vessels causing hinderence in the blood flow."}</span>
            </div>
          </div>
          <div className="bigCharts">
            <BigCharts/>
            <BigCharts/>
          </div>
          <div className="smallCharts">
            <SmallChart
            data={props.smallChart}
            />
          </div>
        </div>
        <div className="dashBoardFooter">
          <div className="footerInnerDiv">
            <div className="footerHeading">{"Note:"}</div>
            <div className="footerText"><ul>{"1. All the investigations are conducted by POCT methods."}</ul>
            <ul>{"2. Test results are not valid for Medico-legal purposes."}</ul>
            <ul>{"3. Test results should be correlated with clinical information."}</ul>
            <ul>{"4. Consult your doctor, if you have any health concerns. Do not self-adjust medications."}</ul>
            <ul>{"5. The body composition, BM R and metabolic age values are estimates and may vary as per many factors like ethnicity, activity levels, diet, and other factors."}</ul>
            </div>
          </div>
        </div>
        </div>      
    </div>
  );
}

App.defaultProps = {
  smallChart:[
    {
      header:"HDL Cholesterol",
      subHeader:"(Trinder method)",
      resultValue:"31 mg/dL",
      comment:"(Increased risk)",
      remarkText:"HDL cholesterol is lower than recommended.",
      labelVals:[{numVal:"<40",textVal:" Increased risk",color: "rgb(255,173,173)"},{numVal:"40 to 50",textVal:" Average risk",color: "rgb(255,217,173)"},{numVal:">60",textVal:" Less than average risk",color: "rgb(184,226,174)"}],
      uid:1,
      icon:"hldIcon",
    },
    {
      header:"LDL Cholesterol",
      subHeader:"(Calculated)",
      resultValue:"69 mg/dL",
      comment:"(Optimal)",
      remarkText:"Your LDL Cholesterol is in optimal range.",
      labelVals:[{numVal:">190",textVal:" Very High",color: "rgb(255,173,173)"},{numVal:"160 to 189",textVal:" High",color: "rgb(255,212,212)"},{numVal:"130 to 159",textVal:" Borderline High",color: "rgb(255,217,173)"},{numVal:"100 to 129",textVal:" Near/Above optimal",color: "rgb(255,247,173)"},{numVal:"<100",textVal:" Optimal",color: "rgb(184,226,174)"}],
      uid:2,
      icon:"ldlIcon"
    },
    {
      header:"VLDL Cholesterol",
      subHeader:"(Calculated)",
      resultValue:"10 mg/dL",
      comment:"(Normal)",
      remarkText:"Your VLDL Cholesterol is normal.",
      labelVals:[{numVal:">50",textVal:" High",color: "rgb(255,173,173)"},{numVal:"5 to 50",textVal:" Normal",color: "rgb(184,226,174)"},{numVal:"<5",textVal:" Low",color: "rgb(255,217,173)"}],
      uid:3,
      icon:"vldlIcon"
    },
    {
      header:"Cholesterol/HDL Ratio",
      subHeader:"(Calculated)",
      resultValue:"3.2",
      comment:"(Low risk)",
      remarkText:"Your Cholesterol/HDL ratio is in the low risk range.",
      labelVals:[{numVal:">5.0",textVal:" Very High",color: "rgb(255,173,173)"},{numVal:"3.5 to 5.0",textVal:" Average risk",color: "rgb(255,217,173)"},{numVal:"<3.5",textVal:" Low risk",color: "rgb(184,226,174)"}],
      uid:4,
      icon:"ratioIcon"
    }
  ]
}

export default App;


