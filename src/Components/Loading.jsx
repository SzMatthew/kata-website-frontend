import React from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import './SCSS/Loading.scss';

const Loading = () => {
  return (
    <section className='loading'>
      <AiOutlineLoading3Quarters className='loading__icon'/>
      <span className='loading__label'>Betöltés</span>
    </section>
  )
}

export default Loading