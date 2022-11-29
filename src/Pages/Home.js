import React, { Component } from 'react';
import './Home.css'
import Sidebar from '../Components/Sidebar';
import Matrix from '../Components/Matrix';
import { Link } from 'react-router-dom';
function Home() {
    return <div className='home'>
        <Sidebar active={'home'}/>
        <div className='home-content'>
            <div>
            <h1>[  Matrix Calculator  ]</h1>
            <h5>By Quan Nguyen</h5>
            <h3>Overview</h3>
            <p>This web app is designed to calculate basic operations with matrix including matrix addition/subtraction, matrix multiplication, inverse matrix, matrix determinant and matrix power.</p>
            <h3>Get Started</h3>
            <Link to='/addition'>
            Matrix Addition/Subtraction
        </Link>
        <Link to='/multiplication'>
            Matrix Multiplication
        </Link>
        <Link to='/inverse' >
            Inverse Matrix
        </Link>
        <Link to='/determinant'>
            Matrix Determinant
        </Link>
        <Link to='/power'>
            Matrix power
        </Link>
            <h3>My Socials</h3>
            <p>Please feel free to reach out to me through my socials:</p>
            <div className='social'>
                <a target='_blank' href='https://nquan7252.github.io/Miwawebsite/'><img src={require('../Assets/www.png')}></img></a>

            </div>
        </div>
        <a id='attribute' href="https://www.flaticon.com/free-icons/linkedin" title="linkedin icons">Icons created by Freepik - Flaticon</a>
        </div>
    </div>;
}

export default Home;
