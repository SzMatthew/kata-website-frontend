import React from 'react';
import './SCSS/Kapcsolat.scss';
import { HiOutlineMail, HiOutlinePhone }  from 'react-icons/hi';
import Loading from './Loading';
import { useAppContext } from '../Contexts/app-context';

const Kapcsolat = () => {
  const {state: { contacts }, setContacts} = useAppContext();

  return (
    contacts && contacts.email && contacts.phone
      ? <section className="contact">
          <span className='contact__label'>Kapcsolat:</span>
          <div className='contact__wrapper'>
            <HiOutlineMail className='contact__icon'/>
            <span className='contact__email' onClick={() => window.open(`mailto:${contacts.email}`)}>{contacts.email}</span>
          </div>
          <div className='contact__wrapper'>
            <HiOutlinePhone className='contact__icon'/>
            <span>{contacts.phone}</span>
          </div>
        </section>
      : <Loading/>
  )
}

export default Kapcsolat