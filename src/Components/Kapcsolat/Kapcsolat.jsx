import React, { useEffect, useState } from 'react';
import './Kapcsolat.scss';
import { HiOutlineMail, HiOutlinePhone }  from 'react-icons/hi';
import envVariables from "../../EnvVariables";

const Kapcsolat = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    getConstactInfos();
  }, []);

  const getConstactInfos = () => {
    fetch('http://localhost:1337/api/contacts', {
      headers: new Headers({
        'Authorization': `Bearer ${envVariables.API_TOKEN}`
    })})
      .then(response => {
          if (response.ok) {
              return response.json();
          } else {
              throw new Error('Something went wrong!');
          }})
      .then(data => {
        setEmail(data.data[0].attributes.email);
        setPhone(data.data[0].attributes.phone);
      }).catch(error => {
          console.error(`There is a problem: ${error}`);
      });
  };

  return (
    <section className="contact-section">
      <span className='contact-label'>Kapcsolat:</span>
      <div className='wrapper'>
        <HiOutlineMail className='icon'/>
        <span className='email' onClick={() => window.open(`mailto:${email}`)}>{email}</span>
      </div>
      <div className='wrapper'>
        <HiOutlinePhone className='icon'/>
        <span className='phone'>{phone}</span>
      </div>

    </section>
  )
}

export default Kapcsolat