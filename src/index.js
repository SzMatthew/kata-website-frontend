import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Kezdolap from './Components/Kezdolap/Kezdolap';
import KonzultacioEsArak from './Components/Konzultacio-es-arak/Konzultacio-es-arak';
import Rolam from './Components/Rolam/Rolam';
import Folyamatrol from './Components/Folyamatrol/Folyamatrol';
import Velemenyek from './Components/Velemenyek/Velemenyek';
import Kapcsolat from './Components/Kapcsolat/Kapcsolat';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Kezdolap/>}/>
          <Route path='konzultacio-es-arak' element={<KonzultacioEsArak/>}/>
          <Route path='rolam' element={<Rolam/>}/>
          <Route path='folyamatrol' element={<Folyamatrol/>}/>
          <Route path='velemenyek' element={<Velemenyek/>}/>
          <Route path='kapcsolat' element={<Kapcsolat/>}/>
          <Route path='*' element={<p>404</p>}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
