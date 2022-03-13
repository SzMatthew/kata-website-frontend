import React, { useEffect } from 'react';
import './Kapcsolat.scss';
import { HiOutlineMail, HiOutlinePhone }  from 'react-icons/hi';
import Loading from '../Loading/Loading';
import envVariables from "../../EnvVariables";
import { useAppContext } from '../../Contexts/app-context';

const Kapcsolat = () => {
  const {state: { contacts }, setContacts} = useAppContext();

  useEffect(() => {
    if (!contacts) {
      getConstactInfos();
    }
  }, []);

  const getConstactInfos = async () => {
    const response = await fetch(`${envVariables.BACKEND_BASE_URL}/api/contacts`, {
      headers: new Headers({
        'Authorization': `Bearer ${envVariables.API_TOKEN}`
    })});
    const data = await response.json();
    setContacts({
      email: data.data[0].attributes.email,
      phone: data.data[0].attributes.phone
    });
  };

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