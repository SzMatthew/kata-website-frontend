import React from "react";
import './Konzultacio-es-arak.scss';
import KonzultacioItem from './KonzultacioItem/KonzultacioItem';

const KonzultacioEsArak = () => {

  return (
    <section className="content-body">
      <KonzultacioItem title='Gyászfeldolgozás' price='10000' description='Gyászfeldolgozás mindenkinek aki szereti. Itt mindenki választ kaphat, hogy miért forog az univerzum'/>
      <KonzultacioItem title='Egyéni tanácsadás' price='8000' description='Egyéni tanácsadás, ahol egyénileg foglalkozok mindenkivel aki szükségét érzi, hogy foglalkozva legyen vele'/>
      <KonzultacioItem title='Gyászfeldolgozás csoport' price='9000' description='Csoportos gyászfeldolgozás. Kis csoportok mint az AA klubbokban, csak itt a gyászról lesz szó'/>
    </section>
  )
}

export default KonzultacioEsArak