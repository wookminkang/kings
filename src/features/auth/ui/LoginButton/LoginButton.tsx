import React from 'react';
import { Link } from 'react-router-dom';

export const LoginButton = () => {
  return (
    <div className="auth-nav">
      <Link to="/login" className="login-btn">로그인</Link>
    </div>
  );
}; 