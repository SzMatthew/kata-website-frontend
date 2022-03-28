import React from 'react';
import Loading from './Loading';
import { useAppContext } from '../Contexts/app-context';
import './SCSS/Rolam.scss';

const Rolam = () => {
  const {state: { aboutMe }, setAboutMe} = useAppContext();


  return (
    aboutMe
    ? <article className='aboutme-wrapper'>
        <img className='profile-picture' src='https://kata-website-backend.herokuapp.com/uploads/Profile_Picture_3210a06446.jpg?updated_at=2022-03-28T19:11:23.060Z' alt='Profile'></img>
        {aboutMe}
      </article> 
    : <Loading/>
  )
}

export default Rolam