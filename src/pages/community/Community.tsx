import React from 'react';
import { Outlet } from 'react-router-dom';

const Community: React.FC = () => {
  return (
    <div className="community-container">
      <h1>커뮤니티</h1>
      <Outlet />
    </div>
  );
};

export default Community; 