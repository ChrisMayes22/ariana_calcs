
import './App.css';
import updateInsanities from './utils/ariana' 
import React, { useState } from 'react'


function App() {

  const [days, setDays] = useState(0)
  const [ariana, setAriana] = useState(1);
  const [quelani, setQuelani] = useState(1)
  const [arianaActivity, setArianaActivity] = useState("none");
  const [quelaniKills, setQuelaniKills] = useState("0");

  function submitHandler(e){
      e.preventDefault();
      const sing = arianaActivity === "sing" ? true : false;
      const draw = arianaActivity === "draw" ? true : false;
      const [tmpAriana, tmpQuelani] = updateInsanities(ariana, quelani, sing, draw, quelaniKills);
      setAriana(tmpAriana);
      setQuelani(tmpQuelani);
      setDays(days + 1);
  }

  function dayHandler(e) {
    console.log(e.target.value);
    const days = []
    for(let i = 0; i < parseInt(e.target.value); i++){
      days.push(0);
    }
    setDays(days);
    console.log(days);
  }

  return (
    <div className="App">
      <div className="container">
        <div>
          ARIANA: {ariana}
        </div>
        <div>
          QUELANI: {quelani}
        </div>
        <div>
          DAYS CALCULATED: {days}
        </div>
        <div>How many Days to Calculate?</div>
        <input type="number" defaultValue="1" onChange={(e) => dayHandler(e)}/>
        <form name="insanityForm" onSubmit={(e) => submitHandler(e)}>
          <div>
              <label>What does Ariana do on day {days}?</label>
              <div className={"input_container"}>
                  <input onClick = {() => setArianaActivity("sing")}
                      type="radio"
                      name={`ariana`}
                      key={`r_sing-`}
                      id={`r_sing-`}
                      value="sing"/>
                  <label htmlFor={`r_sing-`} children="sing"/>
              </div>
              <div className={"input_container"}>
                  <input onClick = {() => setArianaActivity("draw")}
                      type="radio"
                      name={`ariana`}
                      key={`r_draw-`}
                      id={`r_draw-`}
                      value="draw"/>
                  <label htmlFor={`r_draw-`} children="draw"/>
              </div>
              <div className={"input_container"}>
                  <input onClick = {() => setArianaActivity("none")}
                      type="radio"
                      name={`ariana`}
                      key={`r_none-`}
                      id={`r_none-`}
                      value="none"/>
                  <label htmlFor={`r_none-`} children="none"/>
              </div>

              <label>How many killing blows does Quelani land on day {days}?</label>
              <div className={"input_container"}>
                  <input onClick = {() => setQuelaniKills("0")} 
                      type="radio"
                      name={`quelani`}
                      key={`r_no-kills-`}
                      id={`r_no-kills-`}
                      value="0-1"/>
                  <label htmlFor={`r_no-kills-`} children="0-1"/>
              </div>
              <div className={"input_container"}>
                  <input onClick = {() => setQuelaniKills("2")}
                      type="radio"
                      name={`quelani`}
                      key={`r_two-kills-`}
                      id={`r_two-kills-`}
                      value="2"/>
                  <label htmlFor={`r_two-kills-`} children="2"/>
              </div>
              <div className={"input_container"}>
                  <input onClick = {() => setQuelaniKills("3")}
                      type="radio"
                      name={`quelani`}
                      key={`r_three-kills-`}
                      id={`r_three-kills-`}
                      value="3+"/>
                  <label htmlFor={`r_three-kills-`} children="3+"/>
              </div>
          </div>
          <input type="submit"/>
        </form>
      </div>
    </div>
  );
}

export default App;
