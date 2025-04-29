import React from 'react';
import { Outlet } from 'react-router-dom';

const Reservation: React.FC = () => {
  return (
    <div>
      <h1>예약</h1>
      <Outlet />
    </div>
  );
};

export default Reservation; 