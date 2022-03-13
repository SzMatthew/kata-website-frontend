import React from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import './Loading.scss';

const Loading = () => {
  return (
    <section className='loading-wrapper'>
      <AiOutlineLoading3Quarters className='icon'/>
      <span className='loading-label'>Betöltés</span>
    </section>
  )
}

export default Loading