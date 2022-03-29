import React from 'react';
import './SCSS/Footer.scss';
import { HiOutlineMail, HiOutlinePhone }  from 'react-icons/hi';
import { useAppContext } from '../Contexts/app-context';

const Footer = () => {
  const {state: { contacts }, setContacts} = useAppContext();
  
  return (
    contacts && contacts.email && contacts.phone
    ? <footer className='footer'>
        <section className='contact'>
          <span className='contact__label'>Kapcsolat:</span>
          <div className='contact__item'>
            <HiOutlineMail className='contact__icon'/>
            <span className='contact__item__label contact__item__email' onClick={() => window.open(`mailto:${contacts.email}`)}>
              {contacts.email}
            </span>
          </div>
          <div className='contact__item'>
            <HiOutlinePhone className='contact__icon'/>
            <span className='contact__item__label'>{contacts.phone}</span>
          </div>
        </section>
      </footer>
    : <></>
  )
}

export default Footer;