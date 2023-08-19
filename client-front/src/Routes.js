import React from 'react';
import { Routes as ReactRoutes, Route, Navigate } from 'react-router-dom';
import viewsRoutes from 'views/routes';
import Dashboard from 'main/pages/dashboard/Dashboard';
import Home from 'main/pages/Home';

const Routes = () => {
  return (
    <ReactRoutes>
      {viewsRoutes.map((item, i) => (
        <Route key={i} path={item.path} element={item.renderer()} />
      ))}
      <Route path="*" element={<Navigate replace to="/not-found-cover" />} />
      <Route path="option/*" element={<Home />} />
    </ReactRoutes>
  );
};

export default Routes;
