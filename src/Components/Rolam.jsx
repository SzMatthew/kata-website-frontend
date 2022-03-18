import React, { useEffect, useRef } from 'react';
import Loading from './Loading';
import { useAppContext } from '../Contexts/app-context';
import './SCSS/Rolam.scss';

const Rolam = () => {
  const {state: { aboutMe }, setAboutMe} = useAppContext();


  return (
    aboutMe
    ? <article className='aboutme-wrapper'>
        <img className='profile-picture' src='https://kata-website-backend.herokuapp.com/uploads/272940538_1962448597273807_1665509419555003232_n_ed6e817f85.jpg?updated_at=2022-03-18T19:16:13.154Z' alt='Profile'></img>
        {aboutMe}
      </article> 
    : <Loading/>
  )
}

export default Rolam