import React, {useEffect, useState} from "react";
import './Konzultacio-es-arak.scss';
import KonzultacioItem from './KonzultacioItem/KonzultacioItem';
import envVariables from "../../EnvVariables";

const KonzultacioEsArak = () => {
  const [consultations, setConsultations] = useState();

  useEffect(() => {
    getConsultations();
  }, []);
  
  const getConsultations = () => {
    fetch('http://localhost:1337/api/consultations', {
      headers: new Headers({
        'Authorization': `Bearer ${envVariables.API_TOKEN}`
    })})
      .then(response => {
          if (response.ok) {
              return response.json();
          } else {
              throw new Error('Something went wrong!');
          }})
      .then(data => {
        setConsultations(data.data);
      }).catch(error => {
          console.error(`There is a problem: ${error}`);
      });
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