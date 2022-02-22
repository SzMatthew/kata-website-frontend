import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className='footer-wrapper'>
      <section className='contact'>
        <span className='kapcsolat-label'><strong>Kapcsolat:</strong></span>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;<strong>Tel.:</strong> +36304308853</span>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;<strong>Email:</strong> csehokatapszichologus@gmail.com</span>
      </section>
    </footer>
  )
}

export default Footer;