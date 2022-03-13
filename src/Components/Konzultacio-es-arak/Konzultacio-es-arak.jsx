import React from "react";
import './Konzultacio-es-arak.scss';
import KonzultacioItem from './KonzultacioItem/KonzultacioItem';
import Loading from '../Loading/Loading';
import { useAppContext } from '../../Contexts/app-context';


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