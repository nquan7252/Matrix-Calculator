import React, { Component, useEffect, useState } from "react";
import Matrix from "../Components/Matrix";
import Sidebar from "../Components/Sidebar";
import { determinant } from "../Helper/Funtions.js";
function Determinant(props) {
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
          setResult("error");
          return;
        }
      }
    }
    setResult(determinant(data));
  };
  var num = [2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="determinant">
      <Sidebar active={"determinant"} />
      <div className="wrapper">
      <div className="introduction">
        <h1>[  Matrix Determinant  ]</h1>
        <p>1. Only square matrices have a determinant</p>
        <p>2. If the matrix is 2x2, then the determinant can be calculated as entry(11)*entry(22)-entry(21)*entry(12). </p>
        <p>3. For matrices larger than 2x2, choose one arbitrary continous row,column or diagonal. </p>
        <p>4. For each element in the chosen row/column/diagonal, find a sub-matrix that is constructed by excluding the row and column that the element resides.</p>
        <p>5. Find the determinant of the sub-matrix by recursion (repeating step 2 if necessary), then multiply the corresponding determinant with its chosen number.</p>
        <p>6. Note: For every odd index, multiply that number by -1.</p>
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
          dimensions={[dimensions, dimensions]}
          data={data}
          setData={setData}
        />
        <button id='calculate' onClick={calculate}>Calculate</button>
        <div>{result=='error'?
        <span id='error'>*Matrix is not properly inserted</span>:result}</div>
      </div>
    </div>
    </div>
  );
}

export default Determinant;
