import React from 'react';
import { AppRoutes } from '../pages';
import { Header } from 'widgets/Header';
import './styles/scss/main.scss';

export const App = () => {
  return (
    <div className="layout">
      <Header />
      <main className="main-content">
        <AppRoutes />
      </main>
    </div>
  );
}; 