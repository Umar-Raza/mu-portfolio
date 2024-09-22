import React,{useEffect,useRef} from 'react'
import Typed from 'typed.js'
import HandCode from '../../assets/gifs/HandCoding.gif'

export default function Home() {

  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Muhammad Umar', "a Full-Stack Developer."],
      startDelay: 100,
      typeSpeed: 100,
      backSpeed: 40,
      loop: 10
    });
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="container" id='home'>
        <div className="row">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 order-2  order-md-1 sm-1 type-col d-flex justify-content-center flex-column ">
            <h2>I'm <span className='type-span' ref={el} /></h2>
            <p className='type-p '>
              grow your bussiness with me i am A web and mobile app developer & Real-time firebase developer based in Pakistan.</p>
            <div className='m-4'>
              <div className='downloadBtn m-3' >
                <a href="#services">Get Started <i className="bi bi-arrow-right m-2"></i></a>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 order-1 order-md-2 sm-1 home-lottie d-flex justify-content-end">
            <img src={HandCode} alt="handCodding" />
          </div>
        </div>
      </div>
    </>
  )
}
