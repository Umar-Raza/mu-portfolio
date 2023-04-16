import React from 'react'
import logo from '../../assets/imgs/logo.png'
import { Link } from 'react-router-dom'
export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top" style={{ fontSize: "20px" }}>
            <div className="container">
                {/* <Link img src={logo} alt="mur" className='nav-img' /> */}
                <Link to='/'><img src={logo} alt="mur" className='nav-img' /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item ">
                            <Link className="nav-link " to='/home' aria-current="page">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/about'>About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/project'>Project</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/services'>Services</Link>
                        </li>
                        <li className="nav-item ">
                            <Link className="nav-link" to='/contact'>Contact</Link>
                        </li>
                    </ul>
                    <div className='navbar-rights'>
                        <ul className='nav navbar-nav '>
                            <li className="nav-item ">
                                <Link className="nav-hireMe" to='/hireMe'>Hire me</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav >
    )
}
