import React from 'react'
import { Link } from 'react-router-dom'

import '../styles/LandingPage.css'
import BackgroundImage from '../assets/all-images/job562-nunoon-05.jpg'

export default function LandingPage() {
    return (
        <header style={ HeaderStyle }>
            <h1 className="main-title text-center">Furry Companion</h1>
            <p className="main-para text-center">Find Happiness on Four Paws, Rent a Pet.</p>
            <div className="buttons text-center">
                <Link to="/login">
                    <button className="primary-button">log in</button>
                </Link>
                <Link to="/register">
                    <button className="primary-button" id="reg_btn"><span>register </span></button>
                </Link>
            </div>
        </header>
    )
}

const HeaderStyle = {
    width: "100%",
    height: "100vh",
    background: `url(${BackgroundImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}