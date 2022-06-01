import React, { Component,useState,useEffect } from 'react';
import Matrix from '../Components/Matrix';
import Sidebar from '../Components/Sidebar';
import { inverse } from "../Helper/Funtions.js";
function Inverse(props) {
    let [result, setResult] = useState(null);
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
    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < data[i].length; j++) {
        if (data[i][j] == "" || isNaN(data[i][j])) {
          setResult(false);
          return;
        }
      }
    }
    setResult(inverse(data));
  };
  var num = [2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="inverse">
      <Sidebar active={"inverse"} />
      <div className='wrapper'>
      <div className='introduction'>
        <h1>[  Inverse Matrix  ]</h1>
        <p>1. Matrix must be square to have an inverse.</p>
        <p>2. Find the determinant of the matrix.</p>
        <p>3. Find the minors and then the cofactor matrix.</p>
        <p>4. Find the transpose of the cofactor matrix.</p>
        <p>5. The inverse matrix would be (1/determinant)*transpose of cofactor matrix.</p>
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
        <Matrix
            read={false}
          dimensions={[dimensions, dimensions]}
          data={data}
          setData={setData}
        />
        <button id='calculate' onClick={calculate}>Calculate</button>
        <div>{result==false&&<span id='error'>*Matrix is not properly inserted</span>}</div>
        <div>{result &&<div className='result-container'><img id='equal' src={require('../Assets/equal.png')}></img> <Matrix read={true} dimensions={[dimensions,dimensions]} data={result}/></div>}</div>
      </div>
      </div>
    </div>
  )
          }

export default Inverse;