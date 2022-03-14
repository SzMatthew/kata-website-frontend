import React from "react";
import './SCSS/Konzultacio-es-arak.scss';
import KonzultacioItem from './KonzultacioItem';
import Loading from './Loading';
import { useAppContext } from '../Contexts/app-context';


const KonzultacioEsArak = () => {
  const {state: { consultations }, setConsultations} = useAppContext();

  return (
    <section className="content-body">
      {
        consultations
        ? consultations.map(consultation => 
            <KonzultacioItem key={consultation.id} title={consultation.attributes.name} price={consultation.attributes.price} description={consultation.attributes.description}/>
          )
        : <Loading/>
      }
    </section>
  )
}

export default KonzultacioEsArak