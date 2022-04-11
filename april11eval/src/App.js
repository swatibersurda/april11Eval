
import {useState} from "react";
function App() {
const[score,setScore]=useState(76);
const[wicket,setWicket]=useState(2);
const [ball,setBall]=useState(50);



const handleScore=(value)=>{
  setScore(score+value)

}

const handleWicket=(value)=>{
  setWicket(wicket+value)

}
const handleBall =(value)=>{
  setBall(ball+value)
}
 
const t=Math.floor(`${ball/6}`);
const k= `${ball%6*1.0}`
console.log(t);
console.log(k)
const m=t+k/10
console.log(m);
  return (
    <div className="App">
      <h3>India:</h3>
      <div className="banner">
        <div>
          Score:{" "}
          <h1 className="scoreCount">
            {
              // show "score" here
            }

            {score}
          </h1>
        </div>
        <div>
          Wicket:{" "}
          <h1 className="wicketCount">
            {
              // show wicket here
            }
            {wicket}
          </h1>
        </div>

        <div>
          Over:{" "}
          <h1 className="overCount">
            {
              m           // Show Over here in the format: "over.ball" eg: 4.5 means 4th over and 5th ball
              // if 1 more ball is thrown then over is now 5.0
              // you have to write logic to form this string from current ball number.
            }
          </h1>
        </div>
      </div>

      <div className="addScore">
        Add Score
        {/* these buttons should add the respective amount in the score */}
        <button className="addScore1"
        onClick={()=>{handleScore(1)}}>Add 1</button>
        <button className="addScore4" onClick={()=>{handleScore(4)}}>Add 4</button>
        <button className="addScore6" onClick={()=>{handleScore(6)}}>Add 6</button>
      </div>

      <div className="addWicket">
        Add Wicket
        {/* Increase the count of wicket */}
        <button onClick={()=>{if(wicket<12)handleWicket(1)}}>Add 1 wicket</button>
      </div>

      <div className="addBall">
        Add ball
        {/* Increase the total number of balls thrown here. */}
        <button  onClick={()=>{handleBall(1)}}>Add 1</button>
      </div>

      {/* If score reaches greater than 100, show text "India Won" without quotes in h1 tag with class name 'status' */}
     <h1 className="status">{score>100 ? "india won" :"" }</h1>
     
    </div>
  );
}

export default App;