import React, { Component, useEffect, useState } from 'react';
import './Matrix.css'
function Matrix(props) {
    const changeListener=(event,index1,index2)=>{
        let temp=JSON.parse(JSON.stringify(props.data))
        temp[index1][index2]=event.target.value;
        props.setData(temp);
    }
    useEffect(()=>{

    },[props.dimensions])
    return <div className='matrix'>
        <div><img id='left-bracket' src={require('../Assets/squarebracket.png')}></img></div>
        <div>
        {!props.read&&props.data.map((element,index1)=><div className='row' key={index1+'a'}>
        {element.map((element,index2)=><input key={index2} onChange={(e)=>changeListener(e,index1,index2)} value={props.data?props.data[index1][index2]:element}></input>)}
        </div>)}
        {props.read&&props.data.map((element,index1)=><div className='row' key={index1+'a'}>
        {element.map((element,index2)=><input readOnly key={index2} onChange={(e)=>changeListener(e,index1,index2)} value={props.data?props.data[index1][index2]:element}></input>)}
        </div>)}
        </div>
        <div> <img id='right-bracket' src={require('../Assets/squarebracket.png')}></img></div>

        {/* <img id='left-bracket' src={require('../Assets/squarebracket.png')}></img>
        <img id='right-bracket' src={require('../Assets/squarebracket.png')}></img> */}

    </div>;
}

export default Matrix;
//2310