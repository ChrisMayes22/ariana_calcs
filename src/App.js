
import './App.css';
import updateInsanities from './utils/ariana' 
import React, { useState } from 'react'


function App() {

  const [days, setDays] = useState(0)
  const [ariana, setAriana] = useState(1);
  const [quelani, setQuelani] = useState(1)
  const [arianaActivity, setArianaActivity] = useState("none");
  const [quelaniKills, setQuelaniKills] = useState("0");

  function submitHandler(){
      const sing = arianaActivity === "sing" ? true : false;
      const draw = arianaActivity === "draw" ? true : false;
      const [tmpAriana, tmpQuelani] = updateInsanities(ariana, quelani, sing, draw, quelaniKills);
      setAriana(tmpAriana);
      setQuelani(tmpQuelani);
      setDays(days + 1);
  }

  function arianaHandler(e){
      setAriana(parseInt(e.target.value))
  }

  function quelaniHandler(e){
      setQuelani(parseInt(e.target.value))
  }

  return (
    <div className="App">
      <div className="container">
        <div>
          <div className={"character_label"}><h2>ARIANA: {ariana}</h2></div>
          <br/>
          MANUAL CHANGE: <input type="test" defaultValue={ariana} onChange={(e) => arianaHandler(e)}/>
        </div>
        <div>
          <div className={"character_label"}><h2>QUELANI: {quelani}</h2></div>
          <br/>
          MANUAL CHANGE: <input type="test" defaultValue={quelani} onChange={(e) => quelaniHandler(e)}/>
        </div>
        <br/>
        <div>
          DAYS CALCULATED: {days}
        </div>
        <br/>
        <section>
          <div>
              <h4>What does Ariana do on day {days}?</h4>
              <div className="flex_container">
                <button 
                  className={["b_activity-choice", arianaActivity === "sing" ? " selected" : ""].join('')} 
                  onClick = {() => setArianaActivity("sing")} 
                  children="sing"/>
                <button 
                  className={["b_activity-choice", arianaActivity === "draw" ? " selected" : ""].join('')} 
                  onClick = {() => setArianaActivity("draw")} 
                  children="draw"/>
                <button 
                  className={["b_activity-choice", arianaActivity === "none" ? " selected" : ""].join('')} 
                  onClick = {() => setArianaActivity("none")} 
                  children="none"/>
              </div>

              <br/>
              <br/>
              <h4>How many killing blows does Quelani land on day {days}?</h4>
              <div className="flex_container">
                <button 
                  className={["b_activity-choice", quelaniKills === "0" ? " selected" : ""].join('')} 
                  onClick = {() => setQuelaniKills("0")} 
                  children="0"/>
                <button 
                  className={["b_activity-choice", quelaniKills === "1" ? " selected" : ""].join('')} 
                  onClick = {() => setQuelaniKills("1")} 
                  children="1"/>
                <button 
                  className={["b_activity-choice", quelaniKills === "2" ? " selected" : ""].join('')} 
                  onClick = {() => setQuelaniKills("2")} 
                  children="2"/>
                <button 
                  className={["b_activity-choice", quelaniKills === "3" ? " selected" : ""].join('')} 
                  onClick = {() => setQuelaniKills("3+")} 
                  children="3"/>
              </div>
          </div>
          <button children="submit" class="submit_button" onClick={() => submitHandler()}/>
        </section>
      </div>
    </div>
  );
}

export default App;
