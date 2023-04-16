import React, { useEffect, useState, CSSProperties } from 'react'
import './App.scss';
import { ToastContainer } from 'react-toastify';
import "bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter } from 'react-router-dom';
import Routes from './pages/Routes'
import Navbar from './components/header'
import Footer from './components/footer'
import Home from './pages/frontend/Home';
import About from './pages/frontend/About';
import Services from './pages/frontend/Services';
import Projects from './pages/frontend/Projects';
import Contact from './pages/frontend/Contact';
// import HashLoader from "react-spinners/HashLoader";


// const override: CSSProperties = {
//   display: "block",
//   margin: "0 auto",
//   borderColor: "red",
// };

function App() {
  // let [color, setColor] = useState("#ffffff")
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])

  return (
    <>

      {
        loading ?
        
            <lottie-player src="https://assets7.lottiefiles.com/packages/lf20_f1dhzsnx.json" background="transparent" speed="1" style={{ width: "900px", height: "500px" }} loop autoplay></lottie-player> 

        
          // <HashLoader
          //   color={"#36d7b7"}
          //   loading={loading}
          //   cssOverride={override}
          //   size={150}
          //   aria-label="Loading Spinner"
          //   data-testid="loader"
          // />
          :

          <BrowserRouter>
            {/* <Routes /> */}
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
