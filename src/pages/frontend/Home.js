import React from 'react'
import Typed from 'typed.js'
import { Link } from 'react-router-dom';
import HandCode from '../../assets/gifs/HandCoding.gif'
export default function Home() {

  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Muhammad Umar', "Full-Stack Developer."],
      typeSpeed: 200,
      backSpeed: 50,
      loop: 10
    });
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 order-2  order-md-1 sm-1 type-col d-flex justify-content-center flex-column ">
            <h2>I'm a <span className='type-span' ref={el} /></h2>
            <p className='type-p '>
              grow your bussiness with me i am A web and mobile app developer & Real-time firebase developer based in Pakistan.</p>
            <div className='m-4'>
              <div className='downloadBtn m-3' >
                <Link to="/contact">Get Started <i className="bi bi-arrow-right m-2"></i></Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 order-1 order-md-2 sm-1 home-lottie d-flex justify-content-end">
            <img src={HandCode} alt="handCodding" />
            {/* <lottie-player src="https://assets4.lottiefiles.com/private_files/lf30_wqypnpu5.json" background="transparent" speed="1" style={{ width: "900px", height: "500px" }} loop autoplay></lottie-player> */}
        
          </div>
        </div>
      </div>
    </>
  )
}
