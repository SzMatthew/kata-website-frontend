import React, { useEffect } from "react";
import './Konzultacio-es-arak.scss';
import KonzultacioItem from './KonzultacioItem/KonzultacioItem';
import Loading from '../Loading/Loading';
import envVariables from "../../EnvVariables";
import { useAppContext } from '../../Contexts/app-context';


const KonzultacioEsArak = () => {
  const {state: { consultations }, setConsultations} = useAppContext();

  useEffect(() => {
    if (!consultations) {
      getConsultations();
    }
  }, []);
  
  const getConsultations = async () => {
    const response = await fetch(`${envVariables.BACKEND_BASE_URL}/api/consultations`, {
      headers: new Headers({
        'Authorization': `Bearer ${envVariables.API_TOKEN}`
    })});
    const data = await response.json(); 
    setConsultations(data.data);
  };

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