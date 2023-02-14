import React from 'react';
import { Route, Routes } from 'react-router-dom';
import TablaCitas from './modules/components/TablaCitas';
import TablaConsultorio from './modules/components/TablaConsultorio';
import HomePage from './modules/page/HomePage';

const AppRoutes = () => (
    <Routes>
      <Route exact path="/" element={<HomePage/>} />
      <Route exact path="/tablaCitas" element={<TablaCitas/>} />
      <Route exact path="/tablaConsultorio" element={<TablaConsultorio/>} />
      {/* <Route exact path="*" element={<NotFoundPage404/>} /> */}
    </Routes>
  );
  
  export default AppRoutes;