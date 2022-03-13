import React from 'react';
import './Footer.scss';
import { HiOutlineMail, HiOutlinePhone }  from 'react-icons/hi';
import { useAppContext } from '../../Contexts/app-context';

const Footer = () => {
  const {state: { contacts }, setContacts} = useAppContext();
  
  return (
    contacts && contacts.email && contacts.phone
    ? <footer className='footer-wrapper'>
        <section className='contact'>
          <span className='contact-label'>Kapcsolat:</span>
          <div className='contact-item'>
            <HiOutlineMail className='icon'/>
            <span className='contact-item-label email' onClick={() => window.open(`mailto:${contacts.email}`)}>
              {contacts.email}
            </span>
          </div>
          <div className='contact-item'>
            <HiOutlinePhone className='icon'/>
            <span className='contact-item-label'>{contacts.phone}</span>
          </div>
        </section>
      </footer>
    : <></>
  )
}

export default Footer;