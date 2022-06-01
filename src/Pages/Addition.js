import React, { Component,useState,useEffect } from 'react';
import Sidebar from '../Components/Sidebar';
import { addition,subtraction } from "../Helper/Funtions.js";
import Matrix from '../Components/Matrix';
function Addition(props) {
    let [result, setResult] = useState(null);
    let [operation,setOperation]=useState('+')
  let [dimensions, setDimensions] = useState(2);
  let [dimensions2, setDimensions2] = useState(2);
  let [data1, setData1] = useState(() => {
    if (props.data1) return props.data1;
    let temp = [];
    let subtemp = [];
    for (let i = 0; i < dimensions; i++) {
      for (let j = 0; j < dimensions2; j++) {
        subtemp.push("");
      }
      temp.push(subtemp);
      subtemp = [];
    }
    return temp;
  });
  let [data2, setData2] = useState(() => {
    if (props.data2) return props.data2;
    let temp = [];
    let subtemp = [];
    for (let i = 0; i < dimensions; i++) {
      for (let j = 0; j < dimensions2; j++) {
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
      for (let j = 0; j < dimensions2; j++) {
        subtemp.push("");
      }
      temp.push(subtemp);
      subtemp = [];
    }
    setData1(temp);
    setData2(temp);
  }, [dimensions,dimensions2]);
  const calculate = () => {

    for (let i = 0; i < data1.length; i++) {
      for (let j = 0; j < data1[i].length; j++) {
        if (data1[i][j] == "" || isNaN(data1[i][j])) {
          setResult(false);
          return;
        }
      }
    }
    for (let i = 0; i < data2.length; i++) {
        for (let j = 0; j < data2[i].length; j++) {
          if (data2[i][j] == "" || isNaN(data2[i][j])) {
            setResult(false);
            return;
          }
        }
      }
 
    if (operation=='+')
    setResult(addition(data1,data2));
    else
    setResult(subtraction(data1,data2))

    
  };
  var num = [2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="addition">
      <Sidebar active={"addition"} />
      <div className='wrapper'>
      <div className='introduction'>
            <h1>[  Matrix Addition/Subtraction  ]</h1>
            <p>1. Two matrices must have the same dimensions</p>
            <p>2. Add corresponding entries</p>
            <p>3. Place the sum in the corresponding entry </p>
      </div>
      <div className="content">
        <label>Dimensions:</label>
        <div class='dimensions-container'>
        <select onChange={(e) => setDimensions(e.target.value)}>
          {num.map((element, index) => (
            <option key={index} value={element}>
              {element}
            </option>
          ))}
        </select>
        <span>  x  </span>
        <select onChange={(e) => setDimensions2(e.target.value)}>
          {num.map((element, index) => (
            <option key={index} value={element}>
              {element}
            </option>
          ))}
        </select>
        </div>
        <label>Operation:</label>
        <select onChange={(e)=>setOperation(e.target.value)}>
            <option value='+'>Addition</option>
            <option value='-'>Subtraction</option>
        </select>
        <div className='matrix-container-addition'>
        <Matrix
          dimensions={[dimensions, dimensions]}
          data={data1}
          setData={setData1}
        />
        <img id='plus' src={operation=='+'?require('../Assets/plus.png'):require('../Assets/minus.png')}></img>
        <Matrix
          dimensions={[dimensions, dimensions]}
          data={data2}
          setData={setData2}
        />
        </div>
        <button id='calculate' onClick={calculate}>Calculate</button>
        <div>{result==false&&<span id='error'>*Matrix is not properly inserted</span>}</div>
        <div>{result &&<div className='result-container'><img id='equal' src={require('../Assets/equal.png')}></img> <Matrix read={true} dimensions={[dimensions,dimensions]} data={result}/></div>}</div>
      </div>
      </div>
    </div>
  );
}   
export default Addition;