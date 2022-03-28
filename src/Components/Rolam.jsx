import React from 'react';
import Loading from './Loading';
import { useAppContext } from '../Contexts/app-context';
import './SCSS/Rolam.scss';

const Rolam = () => {
  const {state: { aboutMe }, setAboutMe} = useAppContext();

  return (
    aboutMe
    ? <article className='aboutme-wrapper'>
        <img className='profile-picture' src={aboutMe.pictureUrl} alt='Profile'></img>
        {aboutMe.aboutMe}
      </article> 
    : <Loading/>
  )
}

export default Rolam