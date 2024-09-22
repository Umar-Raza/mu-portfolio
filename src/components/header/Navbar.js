import React from 'react'
import logo from '../../assets/imgs/logo.png'
export default function Navbar() {
    return (
        <nav id='navbar' className="navbar navbar-expand-lg bg-body-tertiary sticky-top" style={{ fontSize: "20px" }}>
            <div className="container">
                <a href='#home'><img src={logo} alt="mur" className='nav-img' /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item ">
                            <a className="nav-link " href='#home' aria-current="page">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href='#about'>About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href='#services'>Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href='#project'>Project</a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link" href='#contact'>Contact</a>
                        </li>
                    </ul>
                    <div className='navbar-rights'>
                        <ul className='nav navbar-nav '>
                            <li className="nav-item ">
                                <a className="nav-hireMe" href='#contact'>Hire me</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav >
    )
}
