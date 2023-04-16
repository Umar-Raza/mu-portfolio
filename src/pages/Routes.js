import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom"

import Home from './frontend/Home'
import About from './frontend/About'
import Services from './frontend/Services'
import Projects from './frontend/Projects'
// import Header from '../components/header'
// import Footer from '../components/footer'
import Contact from './frontend/Contact'
import HireMe from './frontend/HireMe'
import NoPage from './frontend/NoPage'

export default function Index() {
    return (
        <>
            {/* <BrowserRouter> */}
                <Routes>
                    <Route paths='/*' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/service' element={<Services />} />
                    <Route path='/project' element={<Projects />} />
                    <Route path='/contact' elementss={<Contact />} />
                    <Route path='/services' element={<Services />} />
                    <Route path='/HireMe' element={<HireMe />} />
                    <Route path='*' element={<NoPage />} />
                </Routes>
            {/* </BrowserRouter> */}
        </>
    )
}
