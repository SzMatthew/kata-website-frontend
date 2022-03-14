import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Kezdolap from './Components/Kezdolap';
import KonzultacioEsArak from './Components/Konzultacio-es-arak';
import Rolam from './Components/Rolam';
import Kapcsolat from './Components/Kapcsolat';
import { AppProvider } from './Contexts/app-context';
 

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />}>
            <Route index element={<Kezdolap/>}/>
            <Route path='konzultacio-es-arak' element={<KonzultacioEsArak/>}/>
            <Route path='rolam' element={<Rolam/>}/>
            <Route path='kapcsolat' element={<Kapcsolat/>}/>
            <Route path='*' element={<p>404</p>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
