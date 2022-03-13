import React, {useEffect, useState} from 'react';
import './Footer.scss';
import { HiOutlineMail, HiOutlinePhone }  from 'react-icons/hi';
import envVariables from "../../EnvVariables";


const Footer = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    getConstactInfos();
  }, []);

  const getConstactInfos = async () => {
    const response = await fetch(`${envVariables.BACKEND_BASE_URL}/api/contacts`, {
      headers: new Headers({
        'Authorization': `Bearer ${envVariables.API_TOKEN}`
    })});
    const data = await response.json();
    setEmail(data.data[0].attributes.email);
    setPhone(data.data[0].attributes.phone);
     
  };

  return (
    email && phone
    ? <footer className='footer-wrapper'>
        <section className='contact'>
          <span className='contact-label'>Kapcsolat:</span>
          <div className='contact-item'>
            <HiOutlineMail className='icon'/>
            <span className='contact-item-label email' onClick={() => window.open(`mailto:${email}`)}>
              {email}
            </span>
          </div>
          <div className='contact-item'>
            <HiOutlinePhone className='icon'/>
            <span className='contact-item-label'>{phone}</span>
          </div>
        </section>
      </footer>
    : <></>
  )
}

export default Footer;