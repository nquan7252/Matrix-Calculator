import React, { Component, useState, useEffect } from "react";
import Matrix from "../Components/Matrix";
import Sidebar from "../Components/Sidebar";
import { power } from "../Helper/Funtions.js";

function Power(props) {
  let [result, setResult] = useState(null);
  let [powerr, setPowerr] = useState(2);
  let [dimensions, setDimensions] = useState(2);
  let [data, setData] = useState(() => {
    if (props.data) return props.data;
    let temp = [];
    let subtemp = [];
    for (let i = 0; i < dimensions; i++) {
      for (let j = 0; j < dimensions; j++) {
        subtemp.push("");
      }
      temp.push(subtemp);
      subtemp = [];
    }
    return temp;
  });
  useEffect(() => {
    let temp = [];
    let subtemp = [];
    for (let i = 0; i < dimensions; i++) {
      for (let j = 0; j < dimensions; j++) {
        subtemp.push("");
      }
      temp.push(subtemp);
      subtemp = [];
    }
    setData(temp);
  }, [dimensions]);
  const calculate = () => {
    if (powerr==''){
        setResult(false)
        return;
    }
    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < data[i].length; j++) {
        if (data[i][j] == "" || isNaN(data[i][j])) {
          setResult(false);
          return;
        }
      }
    }
    setResult(power(data, powerr));
  };
  var num = [2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="power">
      <Sidebar active={"power"} />
      <div className="wrapper">
        <div className="introduction">
          <h1>[ Matrix power ]</h1>
          <p>1. Multiply the matrix by itself n times (n=power number) </p>
        </div>
        <div className="content">
            <label>Dimensions:</label>
          <select onChange={(e) => setDimensions(e.target.value)}>
            {num.map((element, index) => (
              <option key={index} value={element}>
                {element}
              </option>
            ))}
          </select>
          <label>Power:</label>
          <input
            onChange={(e) => setPowerr(e.target.value)}
            defaultValue={powerr}
          ></input>
          <Matrix
            read={false}
            dimensions={[dimensions, dimensions]}
            data={data}
            setData={setData}
          />
          <button id='calculate' onClick={calculate}>Calculate</button>
          <div>
            {result==false&&<span id='error'>*Matrix is not properly inserted</span>}
            <div>{result &&<div className='result-container'><img id='equal' src={require('../Assets/equal.png')}></img> <Matrix read={true} dimensions={[dimensions,dimensions]} data={result}/></div>}</div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Power;
