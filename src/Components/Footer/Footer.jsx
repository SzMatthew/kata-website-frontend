import React from 'react';
import './Footer.scss';
import { HiOutlineMail, HiOutlinePhone }  from 'react-icons/hi';


const Footer = () => {
  return (
    <footer className='footer-wrapper'>
      <section className='contact'>
        <span className='contact-label'>Kapcsolat:</span>
        <div className='contact-item'>
          <HiOutlineMail className='icon'/>
          <span className='contact-item-label email' onClick={() => window.open('mailto:csehokatapszichologus@gmail.com')}>csehokatapszichologus@gmail.com</span>
        </div>
        <div className='contact-item'>
          <HiOutlinePhone className='icon'/>
          <span className='contact-item-label'>+36 30 4308853</span>
        </div>
      </section>
    </footer>
  )
}

export default Footer;