import React from 'react';
import './Kapcsolat.scss';
import { HiOutlineMail, HiOutlinePhone }  from 'react-icons/hi';

const Kapcsolat = () => {
  return (
    <section className="contact-section">
      <span className='contact-label'>Kapcsolat:</span>
      <div className='wrapper'>
        <HiOutlineMail className='icon'/>
        <span className='email' onClick={() => window.open('mailto:csehokatapszichologus@gmail.com')}>csehokatapszichologus@gmail.com</span>
      </div>
      <div className='wrapper'>
        <HiOutlinePhone className='icon'/>
        <span className='phone'>+36 30 4408853</span>
      </div>

    </section>
  )
}

export default Kapcsolat