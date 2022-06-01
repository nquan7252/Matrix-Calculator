import React, { Component,useState,useEffect } from 'react';
import Matrix from '../Components/Matrix';
import Sidebar from '../Components/Sidebar';
import { multiplication } from "../Helper/Funtions.js";

function Multiplication(props) {
    let [result, setResult] = useState(null);
  let [dimensions1, setDimensions1] = useState(2);
  let [dimensions2,setDimensions2]=useState(2);
  let [dimensions3,setDimensions3]=useState(2);

  let [data1, setData1] = useState(() => {
    if (props.data1) return props.data1;
    let temp = [];
    let subtemp = [];
    for (let i = 0; i < dimensions1; i++) {
      for (let j = 0; j < dimensions1; j++) {
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
    for (let i = 0; i < dimensions2; i++) {
      for (let j = 0; j < dimensions3; j++) {
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
    for (let i = 0; i < dimensions1; i++) {
      for (let j = 0; j < dimensions2; j++) {
        subtemp.push("");
      }
      temp.push(subtemp);
      subtemp = [];
    }
    setData1(temp);
  }, [dimensions1,dimensions2]);

  useEffect(() => {
    let temp = [];
    let subtemp = [];
    for (let i = 0; i < dimensions2; i++) {
      for (let j = 0; j < dimensions3; j++) {
        subtemp.push("");
      }
      temp.push(subtemp);
      subtemp = [];
    }
    setData2(temp);
  }, [dimensions2,dimensions3]);






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
    setResult(multiplication(data1,data2))
  };
  var num = [2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="multiplication">
      <Sidebar active={"multiplication"} />
      <div className='wrapper'>
      <div className='introduction'>
            <h1>[  Matrix Multiplication  ]</h1>
            <p>1. First matrix's column number must match second matrix's row number to perform multiplication.</p>
            <p>2. Take the dot product of the rows on the left matrix and the column on the right matrix.</p>
            <p>3. Place the dot product result in the corresponding entry of the new matrix (has the same index from row and column above)</p>
      </div>
      <div className="content">
        <label>Dimensions of matrix 1:</label>
        <div>
        <select selected={dimensions1} onChange={(e) => setDimensions1(e.target.value)}>
          {num.map((element, index) => (
            <option key={index} value={element}>
              {element}
            </option>
          ))}
        </select>
        <span>  x  </span>
        <select onChange={(e) => setDimensions2(e.target.value)}>
          {num.map((element, index) => (
            element==dimensions2?<option selected key={index} value={element}>
              {element}
            </option>:<option key={index} value={element}>
              {element}
            </option>
          ))}
        </select>
        </div>
        <label>Dimensions of matrix 2:</label>
        <div>
        <select onChange={(e) => setDimensions2(e.target.value)}>
          {num.map((element, index) => (
              element==dimensions2?
            <option selected key={index} value={element}>
              {element}
            </option>:<option key={index} value={element}>
              {element}
            </option>
          ))}
        </select>
        <span>  x  </span>
        <select onChange={(e) => setDimensions3(e.target.value)}>
          {num.map((element, index) => (
            <option key={index} value={element}>
              {element}
            </option>
          ))}
        </select>

        </div>
        <div className='matrix-container-addition'>
        <Matrix
          dimensions={[dimensions1, dimensions2]}
          data={data1}
          setData={setData1}
        />
        <img id='plus' src={require('../Assets/multiplication.png')}></img>
        <Matrix
          dimensions={[dimensions2, dimensions3]}
          data={data2}
          setData={setData2}
        />
        </div>
        <button id='calculate' onClick={calculate}>Calculate</button>
        <div>{result==false&&<span id='error'>*Matrix is not properly inserted</span>}</div>
        <div>{result &&<div className='result-container'> <img id='equal' src={require('../Assets/equal.png')}></img><Matrix read={true} dimensions1={[dimensions1,dimensions1]} data={result}/></div>}</div>
      </div>
      </div>
    </div>
  )
}

export default Multiplication;