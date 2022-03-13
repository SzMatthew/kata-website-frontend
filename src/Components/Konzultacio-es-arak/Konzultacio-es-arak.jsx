import React, {useEffect, useState} from "react";
import './Konzultacio-es-arak.scss';
import KonzultacioItem from './KonzultacioItem/KonzultacioItem';
import envVariables from "../../EnvVariables";

const KonzultacioEsArak = () => {
  const [consultations, setConsultations] = useState();

  useEffect(() => {
    getConsultations();
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
        : <></>
      }
    </section>
  )
}

export default KonzultacioEsArak