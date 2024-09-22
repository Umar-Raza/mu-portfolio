import React from 'react'
// Icons
import GmailIcon from '../../assets/icons/gmail.png'
import call from '../../assets/icons/call.png'
import whatsApp from '../../assets/icons/whatsApp.jpg'
import github from '../../assets/icons/github.png'

export default function Footer() {
  return (
    <div className="footerBg">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className='footer'>
              <a href="mailto:umardev92@gmail.com"><img className='Icon' src={GmailIcon} alt="Gmail" /></a>
              <a href="tel:03107029087"><img className='Icon' src={call} alt="Call" style={{ marginLeft: "8px", marginRight: "8px" }} /></a>
              <a href="https://wa.me/+923107029087" target='_blank' rel="noreferrer"><img className='Icon' src={whatsApp} alt="WhatsApp" style={{ marginRight: "8px", }} /></a>
              <a href="https://github.com/Umar-Raza" target='_blank' rel="noreferrer"><img className='Icon' src={github} alt="Githup" /></a>
            </div>
            <div className="policy">
              <p className=' mt-0 text-center'>&copy;{window.year} <a href="#home">Muhammad Umar</a>. All Rights reserved.</p>
            </div>
          </div>
          <span className="upArrow">
            <a href="#home"><i className="bi bi-arrow-up-circle"></i></a>
          </span>
        </div>
      </div>

    </div>
  )
}
