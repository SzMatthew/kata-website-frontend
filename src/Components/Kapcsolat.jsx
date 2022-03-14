import React from 'react';
import './SCSS/Kapcsolat.scss';
import { HiOutlineMail, HiOutlinePhone }  from 'react-icons/hi';
import Loading from './Loading';
import { useAppContext } from '../Contexts/app-context';

const Kapcsolat = () => {
  const {state: { contacts }, setContacts} = useAppContext();

  return (
    contacts && contacts.email && contacts.phone
      ? <section className="contact-section">
          <span className='contact-label'>Kapcsolat:</span>
          <div className='wrapper'>
            <HiOutlineMail className='icon'/>
            <span className='email' onClick={() => window.open(`mailto:${contacts.email}`)}>{contacts.email}</span>
          </div>
          <div className='wrapper'>
            <HiOutlinePhone className='icon'/>
            <span className='phone'>{contacts.phone}</span>
          </div>
        </section>
      : <Loading/>
  )
}

export default Kapcsolat