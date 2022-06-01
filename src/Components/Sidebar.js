import React, { Component } from 'react';
import { Link } from 'react-router-dom';
function Sidebar(props) {
    return<div className='sidebar'>
        <div>
        <img id='logo' src={require('../Assets/matrix.png')}></img>
        </div>
        <div>
        <Link to='/' id={props.active=='home'&&'active'}>
            Home
        </Link>
        <Link to='/addition' id={props.active=='addition'&&'active'}>
            Matrix Addition/Subtraction
        </Link>
        <Link to='/multiplication' id={props.active=='multiplication'&&'active'}>
            Matrix Multiplication
        </Link>
        <Link to='/inverse' id={props.active=='inverse'&&'active'}>
            Inverse Matrix
        </Link>
        <Link to='/determinant' id={props.active=='determinant'&&'active'}>
            Matrix Determinant
        </Link>
        <Link to='/power' id={props.active=='power'&&'active'}>
            Matrix power
        </Link>
        </div>
    </div>;
}

export default Sidebar;