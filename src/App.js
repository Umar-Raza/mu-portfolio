import React, { useEffect, useState } from 'react'
import './App.scss';
import { ToastContainer } from 'react-toastify';
import "bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/header'
import Footer from './components/footer'
import Home from './pages/frontend/Home';
import About from './pages/frontend/About';
import Services from './pages/frontend/Services';
import Projects from './pages/frontend/Projects';
import Contact from './pages/frontend/Contact';
import PreLoader from './components/preLoader/PreLoader';

function App() {

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  return (
    <>
      {
        loading ?
          <PreLoader />
          :
          <BrowserRouter>
            <Navbar />
            <Home />
            <About />
            <Services />
            <Projects />
            <Contact />
            <Footer />
          </BrowserRouter>
      }

      <ToastContainer
        position="bottom-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      >
      </ToastContainer>
    </>

  );
}

export default App;
